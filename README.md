# Pipedrive Test

Simple test made using *Typescript*.

## Stack
 - Sqlite (all files are inside the db folder in the root directory)
 - Typescript

## How to run the project
```code
make start
```

## Unit Test
I've implemented Unit Test in the main functions to create the relationship. You can run the tests using the command:

```code
npm run test
```

And to check the coverage:

```code
npm run test:coverage
```

## Implementation details

When the API receives a request to create a new oganization, the following steps are made:

 - Generates the index_name of the organization
 - Check: if do not exists, create a new one, if exists retrieve it
 - Associate the Siblings using the Math Formula: __(n(n-1)/2)*2__
 - Associate Daughters
 - Populate daughters organizations recursively

## Track the evolution
You can check the Project Evolution using the git commands. I've logged all progress.