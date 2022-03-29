import { YAMLHandler } from '.'
import YAMLContext from '..'

type ParsedMigrations = {
  migrations: unknown[]
}

async function parse(context: YAMLContext): Promise<ParsedMigrations> {
  const { migrations } = context.assets;
  return { migrations };
}

async function dump(context: YAMLContext): Promise<ParsedMigrations> {
  const { migrations } = context.assets;

  return { migrations: migrations || {} };
}

const migrationsHandler: YAMLHandler<ParsedMigrations> = {
  parse,
  dump,
};

export default migrationsHandler;
