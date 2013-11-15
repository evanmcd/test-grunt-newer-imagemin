# Test `grunt-newer` with `grunt-contrib-imagemin`

Confirm that things work as expected with the following:

```bash
npm install
npm test
```

The output should include something like this:

```
Running "newer:imagemin:main" (newer) task

Running "imagemin:main" (imagemin) task
✔ Source/deep/dir/origin.jpg (saved 4.57 kB)
✔ Source/not.png (saved 59.88 kB)
Minified 2 images (saved 64.44 kB)

Running "newer-timestamp:imagemin:main:/path/to/test-imagemin/node_modules/grunt-newer/.cache" (newer-timestamp) task

Running "newer-reconfigure:imagemin:main:1" (newer-reconfigure) task

Done, without errors.
```

Ok, now update one of the `Source` images.

```bash
touch Source/deep/dir/origin.jpg # or otherwise update the mtime
npm test
```

Now we expect just the `origin.jpg` to be run through `imagemin`:

```
Running "newer:imagemin:main" (newer) task

Running "imagemin:main" (imagemin) task
✔ Source/deep/dir/origin.jpg (saved 4.57 kB)
Minified 1 image (saved 4.57 kB)

Running "newer-timestamp:imagemin:main:/Users/tschaub/projects/test-imagemin/node_modules/grunt-newer/.cache" (newer-timestamp) task

Running "newer-reconfigure:imagemin:main:1" (newer-reconfigure) task

Done, without errors.
```

The output above confirms that just the one modified image was processed in the second run.
