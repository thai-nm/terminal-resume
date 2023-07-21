// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

export const help = async (args: string[]): Promise<string> => {
  return `Available commands:
  about     -   About this website.
  banner    -   Show banner,
  google    -   Do a Google search,
  date      -   Show current datetime,
  readme    -   Redirect to my GitHub Readme,
  help      -   Show command description,
  sumfetch  -   Show summary of me

[tab]: trigger completion.
[ctrl+l]: clear terminal.\n
`;
};

export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
You can find the commands below helpful:
  sumfetch      -  A summary about me.
  resume        -  My latest resume.
  readme        -  My GitHub readme.`;
};

export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const banner = (args?: string[]): string => {
  return `
  <pre>
  ████████╗██╗  ██╗ █████╗ ██╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗
  ╚══██╔══╝██║  ██║██╔══██╗██║    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║
     ██║   ███████║███████║██║    ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║
     ██║   ██╔══██║██╔══██║██║    ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║
     ██║   ██║  ██║██║  ██║██║    ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║
     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝    ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝
  </pre>
Type 'sumfetch' to display summary.
Type 'help' to see the list of available commands.
`;
};
