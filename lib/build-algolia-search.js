import dotenv from 'dotenv';
import algoliasearch from 'algoliasearch/lite';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

try {
     dotenv.config()
     if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
          throw new Error('NEXT_PUBLIC_ALGOLIA_APP_ID is not defined')
     }

     if (!process.env.NEXT_PUBLIC_ALGOLIA_API_KEY) {
          throw new Error('Algolia API key is not defined')
     }
}
catch (error) {
     console.log(error)
     process.exit(1);
}

const COTENT_PATH = path.join(process.cwd(), 'prisma');
