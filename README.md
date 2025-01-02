# Instructions

```
$ cd library
library $ npm install
library $ npm run build
```

```
$ cd nextjs
nextjs $ npm install
nextjs $ npm run dev
# Visit http://localhost:3000 and see the error
```

UPDATE: This was created for https://stackoverflow.com/questions/79321604/importing-typescript-constants-in-nextjs-fails/ The root cause is identified as the use of turbopack which when removed makes the build pass.
