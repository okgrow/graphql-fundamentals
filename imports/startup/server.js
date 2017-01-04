// Set up demo data creation for each user
import '../lib/pomodorosSeed';

// API
import PomodorosCollection from '../api/PomodorosCollection';

// for development
// allow access from meteor shell
global.PomodorosCollection = PomodorosCollection;
// update the GraphQL schema for linting
import './updateEslintGraphqlSchema';

import './apolloServer';
import '../lib/trello';
