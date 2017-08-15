import { ObjectId } from 'mongodb';

const fromMongo = item => ({
  ...item,
  id: item._id.toString(),
});

export default class Place {
  constructor(db) {
    this.collection = db.collection('places');
  }

  async findOneById(id) {
    const _id = new ObjectId(id);
    const result = await this.collection.findOne({ _id });

    return fromMongo(result);
  }

  async all({ lastCreatedAt = 0, limit = 100 }) {
    const results = await this.collection
      .find({ createdAt: { $gt: lastCreatedAt } })
      .sort({ createdAt: 1 })
      .limit(limit)
      .toArray();

    return results.map(fromMongo);
  }

  async insert(doc) {
    const docToInsert = {
      ...doc,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const { insertedId } = await this.collection.insertOne(docToInsert);

    return insertedId;
  }

  async updateById(id, doc) {
    const _id = new ObjectId(id);
    const ret = await this.collection.update(
      { _id },
      {
        $set: {
          ...doc,
          updatedAt: Date.now(),
        },
      }
    );
    return ret;
  }

  async removeById(id) {
    const _id = new ObjectId(id);
    const ret = await this.collection.remove({
      _id,
    });

    return ret;
  }
}
