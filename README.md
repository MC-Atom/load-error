# load-error

Showcases the Motion Array bug where objects, specifically images and text in my expereince but potentially all objects, don't load after a page reload.

Tested on Mac with an M1 Pro

To reproduce, initialize the repository using https://motioncanvas.io/docs/
run using `npm run serve`
when reloading the localhost page, not all images will show up. When pressing play the moving image pops into existance. After moving the playhead with the cursor, all images pop into existance.

Video of this is showcased in ErrorsWhileLoading.mkv
