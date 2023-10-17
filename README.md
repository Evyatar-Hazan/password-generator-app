# Password-Generator

----

----

## requirements

---



#### node version
```bash
v16.13.0
```
make sure this is your node version

#### clone
```bash
git clone ""
```

#### git
```bash
git fetch
git checkout main
```

#### npm
```bash
npm install 
```


---

#### build debag apk
```bash
npm start
``` 
 in another terminal run the following command
```bash
npm run android
```

---

#### build release apk
- 
    ```bash
    cd android/
    ```
- 
    ```bash
    ./gradlew clean
    ```
- 
    ```bash
    ./gradlew app:assembleRelease
    ```


---


#### build release aab


- If a version change is required:
    Change the file `android/app/build.gradle`
    the `versionCode` and the `versionName` 
- 
    ```bash
    cd android/
    ```
- 
    ```bash
    ./gradlew clean
    ```
- 
    ```bash
    ./gradlew bundleRelease

    ```

---

### sentry
[sentry](https://evyatarhazan.sentry.io/issues/?project=4506066096685056)
