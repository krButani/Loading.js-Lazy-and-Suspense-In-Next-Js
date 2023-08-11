# How to Insall and Run Application

* Install basic installation of node(npm)

`npx create-next-app@latest`

# Use Loading page

* 1. create page app/loading.js
* 2. put content

```
export default function Loading() {
  return (<div className="min-h-screen p-5">Loading</div>);
}
```

# if you create seperate loading only one page

* 3. create page any folder like app/about/loading.js
* 4. put content

```
export default function Loading() {
  return <div className="min-h-screen p-5">About Loading</div>;
}
```


# use Lazy and Suspense

* Check Lazy Demo folder for code 
* 1. First create lazy import heavy compnent
* 2. Second import in Suspense compnent and implement
* 3. Than after it load inside page.js