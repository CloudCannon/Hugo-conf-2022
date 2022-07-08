# Hugo Conf (habit stack)

Hugo Conf website created by CloudCannon using hugo, alpine and bookshop

[![Deploy to CloudCannon](https://buttons.cloudcannon.com/deploy.svg)](https://app.cloudcannon.com/register#sites/connect/github/CloudCannon/Hugo-conf-2022)

# Prerequisites

-   Hugo [install](https://gohugo.io/getting-started/installing/). `brew install hugo`
-   Go [install](https://go.dev/learn/). `brew install go`
-   Requires Node >=16 [install](https://nodejs.org/en/)

# Quickstart

1. In the terminal at the root dir, run: `npm i`
2. Start site and bookshop: `npm run dev` OR site alone: `npm run start`

-   By default bookshop live browser will be at : [http://localhost:30775/](http://localhost:30775/)
-   By default the site will be at : [http://localhost:1313/](http://localhost:1313/)

# Create New component

`npm run init` and follow prompts 


# Bug fix:
- Error calling partial intermittently occurs and can be fixed my clearing the hugo cache by running: `hugo mod clean`