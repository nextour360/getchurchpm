(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -116.89,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90C6DAD2_89CE_587D_41B8_F9E1B4546ADF"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_828E774E_89BA_4865_41D7_DF521A15112E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_828E774E_89BA_4865_41D7_DF521A15112E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82820565_89BA_4827_41D8_7A1426A86E84_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_82820565_89BA_4827_41D8_7A1426A86E84",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_82870F01_89BB_B9DF_41C5_810B79E53D80",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_828708FD_89BB_D824_41D6_267D5E1EFB70",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82FF2681_89BB_C8DC_4191_46CACD636943_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_82FF2681_89BB_C8DC_4191_46CACD636943",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 11, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 11)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.video_9F6FF0F1_89C6_C83F_41CA_F7956E89037F",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)",
   "media": "this.panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 3.78,
   "backwardYaw": 144.87,
   "distance": 1,
   "panorama": "this.panorama_828E774E_89BA_4865_41D7_DF521A15112E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A",
 "thumbnailUrl": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_t.jpg",
 "label": "1",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_87E674B6_89C6_4825_41DF_A3E8D833D0B6"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_82FF2681_89BB_C8DC_4191_46CACD636943_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.22,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90AE1B11_89CE_59FF_41D1_6732A86F88F7"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 135.52,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_9074AB40_89CE_585D_41D6_27B6C9A032B2"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 44.81,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90DF4AB3_89CE_5823_41D7_3412BE93BE34"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -44.48,
   "backwardYaw": 117.93,
   "distance": 1,
   "panorama": "this.panorama_82870F01_89BB_B9DF_41C5_810B79E53D80"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 133.76,
   "backwardYaw": -24.02,
   "distance": 1,
   "panorama": "this.panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90"
  }
 ],
 "hfov": 360,
 "label": "10",
 "id": "panorama_828708FD_89BB_D824_41D6_267D5E1EFB70",
 "thumbnailUrl": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_992BCDA9_89CB_B82F_41C5_96AF4A05E6E6",
  "this.overlay_98FE9491_89CA_48FF_41CA_25CA5E2D93A5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -80.29,
   "backwardYaw": 116.29,
   "distance": 1,
   "panorama": "this.panorama_82FF2681_89BB_C8DC_4191_46CACD636943"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 170.48,
   "backwardYaw": 155.23,
   "distance": 1,
   "panorama": "this.panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 63.11,
   "backwardYaw": 101.57,
   "distance": 1,
   "panorama": "this.panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8"
  }
 ],
 "hfov": 360,
 "label": "14",
 "id": "panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD",
 "thumbnailUrl": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_985DB31B_89C7_C9EC_41C7_893E849213AB",
  "this.overlay_987D5ED9_89C6_586C_41DE_6F1D037B2B1F",
  "this.overlay_9C759DE1_89C6_785C_41DC_E327286B00BF",
  "this.overlay_9FAE5A5A_89C7_B86C_41C6_3A31914C4975",
  "this.popup_9FA83EC6_89FE_F865_41A8_D5244357ADA9",
  "this.overlay_9E8E3667_89DA_C823_41D3_C6446BD9AADC"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -62.07,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_930FA9F7_89CE_5823_41B8_B711259DD794"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_828E774E_89BA_4865_41D7_DF521A15112E_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.52,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90988B21_89CE_59DF_41D7_2F6F21EC0CC2"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -109.93,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90CA8AE2_89CE_585D_41DA_3858CF15F807"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -78.43,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90A61B09_89CE_59EF_41D0_550B40AEACDB"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 144.87,
   "backwardYaw": 3.78,
   "distance": 1,
   "panorama": "this.panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -39.57,
   "backwardYaw": 178.76,
   "distance": 1,
   "panorama": "this.panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_828E774E_89BA_4865_41D7_DF521A15112E",
 "thumbnailUrl": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_t.jpg",
 "label": "3",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_873A17EF_89CA_4823_41C8_84B895BAD729",
  "this.overlay_86F4FFD2_89CB_D87D_41B6_8070F5D0E01C",
  "this.overlay_91009C4A_89DE_786C_41D9_9F010B8B6233"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -72.7,
   "backwardYaw": -135.19,
   "distance": 1,
   "panorama": "this.panorama_82870F01_89BB_B9DF_41C5_810B79E53D80"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -170.89,
   "backwardYaw": 45.11,
   "distance": 1,
   "panorama": "this.panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4"
  }
 ],
 "hfov": 360,
 "label": "6",
 "id": "panorama_82820565_89BA_4827_41D8_7A1426A86E84",
 "thumbnailUrl": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_862E78FB_89CF_B82C_41CF_24C95C418375",
  "this.overlay_9987C484_89CE_48E5_41D1_3315989448B1"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.24,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90825B31_89CE_583C_41B9_37FD33C02411"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.77,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90B97B01_89CE_59DF_41AA_77E00995B1FA"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.89,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90DA4AC3_89CE_585C_41DE_1D7639C38B91"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 107.3,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_9079EB50_89CE_587C_41D3_D0B6B26B9967"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.11,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90CD5AE2_89CE_585D_41E1_39E53B290670"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -63.71,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90B0BAF2_89CE_583C_41B6_AAC54A4F6A25"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_828E774E_89BA_4865_41D7_DF521A15112E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_828E774E_89BA_4865_41D7_DF521A15112E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82820565_89BA_4827_41D8_7A1426A86E84_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_82820565_89BA_4827_41D8_7A1426A86E84",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_82870F01_89BB_B9DF_41C5_810B79E53D80",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_828708FD_89BB_D824_41D6_267D5E1EFB70",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82FF2681_89BB_C8DC_4191_46CACD636943_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_82FF2681_89BB_C8DC_4191_46CACD636943",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.video_9F6FF0F1_89C6_C83F_41CA_F7956E89037F",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 0)",
   "media": "this.panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 117.93,
   "backwardYaw": -44.48,
   "distance": 1,
   "panorama": "this.panorama_828708FD_89BB_D824_41D6_267D5E1EFB70"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -135.19,
   "backwardYaw": -72.7,
   "distance": 1,
   "panorama": "this.panorama_82820565_89BA_4827_41D8_7A1426A86E84"
  }
 ],
 "hfov": 360,
 "label": "7",
 "id": "panorama_82870F01_89BB_B9DF_41C5_810B79E53D80",
 "thumbnailUrl": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_99A1259F_89C9_C8E4_41E0_E6ACA116251D",
  "this.overlay_99181148_89C9_C86C_41D6_8F90929704EC"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 155.23,
   "backwardYaw": 170.48,
   "distance": 1,
   "panorama": "this.panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -24.02,
   "backwardYaw": 133.76,
   "distance": 1,
   "panorama": "this.panorama_828708FD_89BB_D824_41D6_267D5E1EFB70"
  }
 ],
 "hfov": 360,
 "label": "11",
 "id": "panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90",
 "thumbnailUrl": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_9886CAA6_89C9_F825_41DA_738742010CF6",
  "this.overlay_984802BD_89C9_C824_41DA_B234564864B9"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 178.76,
   "backwardYaw": -39.57,
   "distance": 1,
   "panorama": "this.panorama_828E774E_89BA_4865_41D7_DF521A15112E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 70.07,
   "backwardYaw": -67.39,
   "distance": 1,
   "panorama": "this.panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4"
  }
 ],
 "hfov": 360,
 "label": "4",
 "id": "panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0",
 "thumbnailUrl": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_86BADED9_89CA_D86C_41C4_F4DD9A148785",
  "this.overlay_86280778_89CA_C82E_41AE_FF40A8E2E30F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.43,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_931059DB_89CE_5863_41D1_DF820A37AFE8"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 139.62,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_9321B9B8_89CE_582C_41DA_6952335EE482"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_82820565_89BA_4827_41D8_7A1426A86E84_camera"
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_9DC34E36_89DA_D825_418D_AEFE29829113.mp3",
  "oggUrl": "media/audio_9DC34E36_89DA_D825_418D_AEFE29829113.ogg"
 },
 "autoplay": true,
 "id": "audio_9DC34E36_89DA_D825_418D_AEFE29829113",
 "data": {
  "label": "X2Download.app - Get Worship _ Melhor lugar (256 kbps)"
 }
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window27669"
 },
 "closeButtonPressedBorderSize": 2,
 "bodyPaddingRight": 0,
 "id": "window_9F10102A_89FE_C82D_41DB_AE0B02946D27",
 "paddingLeft": 0,
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "footerHeight": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minWidth": 20,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "bodyPaddingTop": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "modal": true,
 "backgroundColor": [],
 "bodyPaddingBottom": 0,
 "shadow": true,
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "titlePaddingTop": 5,
 "backgroundOpacity": 1,
 "closeButtonPressedIconLineWidth": 5,
 "footerBackgroundOpacity": 0,
 "class": "Window",
 "paddingRight": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 2,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid93451989_89CE_58EF_41D1_0D83E40C375D"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "shadowColor": "#000000",
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "shadowHorizontalLength": 3,
 "headerPaddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundOpacity": 0.34,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.34,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonPaddingRight": 5,
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "closeButtonPaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBorderSize": 2,
 "closeButtonBorderRadius": 0,
 "shadowBlurRadius": 6,
 "layout": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "gap": 10,
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundOpacity": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 0,
 "closeButtonIconLineWidth": 5,
 "titlePaddingBottom": 5,
 "borderRadius": 5,
 "closeButtonPressedIconColor": "#888888",
 "horizontalAlign": "center",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundOpacity": 0.34,
 "scrollBarWidth": 10,
 "minHeight": 20,
 "closeButtonIconWidth": 20,
 "closeButtonRollOverIconColor": "#666666"
},
{
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1400,
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.24,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90979B21_89CE_59DF_41D3_04130BB95A38"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 116.29,
   "backwardYaw": -80.29,
   "distance": 1,
   "panorama": "this.panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -40.38,
   "backwardYaw": 146.86,
   "distance": 1,
   "panorama": "this.panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85"
  }
 ],
 "hfov": 360,
 "label": "16",
 "id": "panorama_82FF2681_89BB_C8DC_4191_46CACD636943",
 "thumbnailUrl": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_9834E645_89C6_4864_41D8_64D6647EBB37",
  "this.overlay_9BBCBFB5_89DB_D827_41BD_0101F7B26455"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.61,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_9305C9E7_89CE_5823_41D0_B02F5BC079FB"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 146.86,
   "backwardYaw": -40.38,
   "distance": 1,
   "panorama": "this.panorama_82FF2681_89BB_C8DC_4191_46CACD636943"
  }
 ],
 "hfov": 360,
 "label": "17",
 "id": "panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85",
 "thumbnailUrl": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_9A75A900_89DA_F9DC_41D7_EDEFB3DC6FD2"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.14,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90548B5F_89CE_5863_41B8_F37B43F5823B"
},
{
 "class": "Video",
 "label": "Snapinsta.app_video_10000000_2794165377381487_8029117552369692293_n",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_9F6FF0F1_89C6_C83F_41CA_F7956E89037F_t.jpg",
 "width": 1080,
 "loop": false,
 "id": "video_9F6FF0F1_89C6_C83F_41CA_F7956E89037F",
 "height": 1920,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1920,
  "mp4Url": "media/video_9F6FF0F1_89C6_C83F_41CA_F7956E89037F.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.71,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_90602B50_89CE_587C_41D7_66ABA5C30F59"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.25,
 "autoplay": true,
 "id": "popup_9FA83EC6_89FE_F865_41A8_D5244357ADA9",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "pitch": 0.86,
 "yaw": -5.06,
 "hideDuration": 500,
 "popupDistance": 100,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1920,
  "mp4Url": "media/video_9F6FF0F1_89C6_C83F_41CA_F7956E89037F.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 45.11,
   "backwardYaw": -170.89,
   "distance": 1,
   "panorama": "this.panorama_82820565_89BA_4827_41D8_7A1426A86E84"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -67.39,
   "backwardYaw": 70.07,
   "distance": 1,
   "panorama": "this.panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0"
  }
 ],
 "hfov": 360,
 "label": "5",
 "id": "panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4",
 "thumbnailUrl": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_86655D86_89CE_58E4_41BB_3AD7A4A52528",
  "this.overlay_8634C4B7_89CE_4823_4194_8FB1ABF5709E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.98,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_92F3EA07_89CE_5BE4_41D9_9C5099815AB2"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 101.57,
   "backwardYaw": 63.11,
   "distance": 1,
   "panorama": "this.panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD"
  }
 ],
 "hfov": 360,
 "label": "15",
 "id": "panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8",
 "thumbnailUrl": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "overlays": [
  "this.overlay_9E6067BF_89DA_C824_41A6_2BE72DFF1BF6"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.viewer_uid93451989_89CE_58EF_41D1_0D83E40C375DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_9E72F9C1_89FE_585C_41BD_A419662A0E9B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_9E72F9C1_89FE_585C_41BD_A419662A0E9B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid93451989_89CE_58EF_41D1_0D83E40C375DVideoPlayer)",
   "media": "this.video_9F6FF0F1_89C6_C83F_41CA_F7956E89037F",
   "player": "this.viewer_uid93451989_89CE_58EF_41D1_0D83E40C375DVideoPlayer"
  }
 ],
 "id": "PlayList_9E72F9C1_89FE_585C_41BD_A419662A0E9B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -35.13,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_932809CB_89CE_586C_41C2_D8FF1C36AB82"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 0.5,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 50,
 "playbackBarHeadHeight": 15
},
{
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": 115.05,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 641,
 "layout": "absolute",
 "shadow": false,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": 573,
 "children": [
  "this.Image_9AB3F070_89DE_483D_41D8_8FF6AC497AD4"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": 15,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 133,
 "layout": "absolute",
 "shadow": false,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--STICKER"
 }
},
{
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "bottom": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 118,
 "layout": "absolute",
 "shadow": false,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.64,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--MENU"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--INFO photo"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--INFO photoalbum"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--PHOTOALBUM + text"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#04A3E1",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--REALTOR"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_9F790525_89C9_C827_41AD_DAA56F1354AB",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_9F79B525_89C9_C827_41D0_15631118B64A",
  "this.Container_9F795525_89C9_C827_41D0_D8B8B234A695"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_9F790525_89C9_C827_41AD_DAA56F1354AB, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--LOCATION"
 }
},
{
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "paddingLeft": 0,
 "propagateClick": false,
 "left": 0,
 "right": 0,
 "minWidth": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "shadow": false,
 "backgroundOpacity": 0.55,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "UIComponent",
 "paddingBottom": 0,
 "paddingRight": 0,
 "data": {
  "name": "UIComponent39685"
 }
},
{
 "minHeight": 0,
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "paddingLeft": 0,
 "propagateClick": false,
 "left": 0,
 "right": 0,
 "minWidth": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "scaleMode": "custom",
 "borderRadius": 0,
 "visible": false,
 "class": "ZoomImage",
 "paddingBottom": 0,
 "paddingRight": 0,
 "data": {
  "name": "ZoomImage39686"
 }
},
{
 "textDecoration": "none",
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton39687"
 },
 "id": "closeButtonPopupPanorama",
 "paddingLeft": 5,
 "horizontalAlign": "center",
 "propagateClick": false,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "minWidth": 0,
 "borderSize": 0,
 "shadowSpread": 1,
 "rollOverIconColor": "#666666",
 "iconHeight": 20,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "top": 10,
 "iconColor": "#000000",
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "shadow": false,
 "label": "",
 "shadowBlurRadius": 6,
 "layout": "horizontal",
 "gap": 5,
 "fontSize": "1.29vmin",
 "fontStyle": "normal",
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "paddingTop": 5,
 "borderRadius": 0,
 "visible": false,
 "class": "CloseButton",
 "paddingBottom": 5,
 "iconWidth": 20,
 "cursor": "hand",
 "paddingRight": 5,
 "fontWeight": "normal"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": true,
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": true,
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_828E774E_89BA_4865_41D7_DF521A15112E, this.camera_932809CB_89CE_586C_41C2_D8FF1C36AB82); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.33,
   "image": "this.AnimatedImageResource_91FE9D96_89C7_D8E5_41A9_05E6750802CC",
   "pitch": -57.52,
   "yaw": 3.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_87E674B6_89C6_4825_41DF_A3E8D833D0B6",
 "maps": [
  {
   "hfov": 7.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -57.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90, this.camera_92F3EA07_89CE_5BE4_41D9_9C5099815AB2); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_91E2DD9A_89C7_D8ED_4192_E4996A574239",
   "pitch": -0.77,
   "yaw": 133.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_992BCDA9_89CB_B82F_41C5_96AF4A05E6E6",
 "maps": [
  {
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82870F01_89BB_B9DF_41C5_810B79E53D80, this.camera_930FA9F7_89CE_5823_41B8_B711259DD794); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.49,
   "image": "this.AnimatedImageResource_91E2AD9D_89C7_D8E7_41BC_C0D13D152ED0",
   "pitch": -2.57,
   "yaw": -44.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98FE9491_89CA_48FF_41CA_25CA5E2D93A5",
 "maps": [
  {
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FF2681_89BB_C8DC_4191_46CACD636943, this.camera_90B0BAF2_89CE_583C_41B6_AAC54A4F6A25); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.45,
   "image": "this.AnimatedImageResource_91E3ADA2_89C7_D8DC_41CC_3BAD21E38E13",
   "pitch": -4.87,
   "yaw": -80.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_985DB31B_89C7_C9EC_41C7_893E849213AB",
 "maps": [
  {
   "hfov": 12.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90, this.camera_90B97B01_89CE_59DF_41AA_77E00995B1FA); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.98,
   "image": "this.AnimatedImageResource_91E2EDA3_89C7_D8DC_41D7_CE5E9F4CD2A6",
   "pitch": -6.23,
   "yaw": 170.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_987D5ED9_89C6_586C_41DE_6F1D037B2B1F",
 "maps": [
  {
   "hfov": 9.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_9FA83EC6_89FE_F865_41A8_D5244357ADA9, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':2,'paddingLeft':5,'rollOverBackgroundOpacity':0.34,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':2,'pressedIconColor':'#888888','backgroundOpacity':0.34,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':2,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.34,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_9F10102A_89FE_C82D_41DB_AE0B02946D27, this.video_9F6FF0F1_89C6_C83F_41CA_F7956E89037F, this.PlayList_9E72F9C1_89FE_585C_41BD_A419662A0E9B, '95%', '95%', true, true) }"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 118
     }
    ]
   },
   "pitch": 0.86,
   "yaw": -5.06
  }
 ],
 "id": "overlay_9C759DE1_89C6_785C_41DC_E327286B00BF",
 "maps": [
  {
   "hfov": 7.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.62,
   "image": "this.AnimatedImageResource_90231E58_89FA_D86C_41D3_13C7CE685CD7",
   "pitch": 1.01,
   "yaw": -5.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9FAE5A5A_89C7_B86C_41C6_3A31914C4975",
 "data": {
  "label": "Circle Generic 03"
 },
 "maps": [
  {
   "hfov": 15.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8, this.camera_90A61B09_89CE_59EF_41D0_550B40AEACDB); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_913371C6_89DE_C865_41C6_B24637532792",
   "pitch": -0.11,
   "yaw": 63.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9E8E3667_89DA_C823_41D3_C6446BD9AADC",
 "maps": [
  {
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0, this.camera_90979B21_89CE_59DF_41D3_04130BB95A38); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.45,
   "image": "this.AnimatedImageResource_91FFCD98_89C7_D8EC_41D6_0EC9D281620D",
   "pitch": -5.02,
   "yaw": -39.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_873A17EF_89CA_4823_41C8_84B895BAD729",
 "maps": [
  {
   "hfov": 12.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A, this.camera_90AE1B11_89CE_59FF_41D1_6732A86F88F7); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.46,
   "image": "this.AnimatedImageResource_91FFFD98_89C7_D8EC_41D7_3DE59EE92AB3",
   "pitch": 26.59,
   "yaw": 144.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_86F4FFD2_89CB_D87D_41B6_8070F5D0E01C",
 "maps": [
  {
   "hfov": 15.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": 26.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 5.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 92,
      "height": 30
     }
    ]
   },
   "pitch": -12.02,
   "yaw": 13.78
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_91009C4A_89DE_786C_41D9_9F010B8B6233",
 "data": {
  "label": "Poligono"
 },
 "maps": [
  {
   "hfov": 5.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 46,
      "height": 15
     }
    ]
   },
   "pitch": -12.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82870F01_89BB_B9DF_41C5_810B79E53D80, this.camera_90DF4AB3_89CE_5823_41D7_3412BE93BE34); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.42,
   "image": "this.AnimatedImageResource_91E00D99_89C7_D8EF_41D7_A67DC1A917AD",
   "pitch": -6.66,
   "yaw": -72.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_862E78FB_89CF_B82C_41CF_24C95C418375",
 "maps": [
  {
   "hfov": 12.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4, this.camera_90DA4AC3_89CE_585C_41DE_1D7639C38B91); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.39,
   "image": "this.AnimatedImageResource_91E1DD99_89C7_D8EF_41C8_A98A4208ACF3",
   "pitch": -7.48,
   "yaw": -170.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9987C484_89CE_48E5_41D1_3315989448B1",
 "maps": [
  {
   "hfov": 12.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_828708FD_89BB_D824_41D6_267D5E1EFB70, this.camera_9074AB40_89CE_585D_41D6_27B6C9A032B2); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.48,
   "image": "this.AnimatedImageResource_91E1AD99_89C7_D8EF_41DF_7D5F7AADD17E",
   "pitch": -3.39,
   "yaw": 117.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_99A1259F_89C9_C8E4_41E0_E6ACA116251D",
 "maps": [
  {
   "hfov": 12.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82820565_89BA_4827_41D8_7A1426A86E84, this.camera_9079EB50_89CE_587C_41D3_D0B6B26B9967); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.43,
   "image": "this.AnimatedImageResource_91E17D9A_89C7_D8ED_41D6_40D2A95B10F2",
   "pitch": -6.25,
   "yaw": -135.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_99181148_89C9_C86C_41D6_8F90929704EC",
 "maps": [
  {
   "hfov": 12.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_828708FD_89BB_D824_41D6_267D5E1EFB70, this.camera_90825B31_89CE_583C_41B9_37FD33C02411); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_91E27DA0_89C7_D8DD_41D7_3A9E3D6B0133",
   "pitch": -0.93,
   "yaw": -24.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9886CAA6_89C9_F825_41DA_738742010CF6",
 "maps": [
  {
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD, this.camera_90988B21_89CE_59DF_41D7_2F6F21EC0CC2); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.48,
   "image": "this.AnimatedImageResource_91E3CDA2_89C7_D8DC_41BD_76EFCCD8DC6D",
   "pitch": 3.13,
   "yaw": 155.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_984802BD_89C9_C824_41DA_B234564864B9",
 "maps": [
  {
   "hfov": 12.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4, this.camera_9305C9E7_89CE_5823_41D0_B02F5BC079FB); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.39,
   "image": "this.AnimatedImageResource_91FF5D98_89C7_D8EC_41E0_4DBA1167389F",
   "pitch": -7.48,
   "yaw": 70.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_86BADED9_89CA_D86C_41C4_F4DD9A148785",
 "maps": [
  {
   "hfov": 12.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_828E774E_89BA_4865_41D7_DF521A15112E, this.camera_931059DB_89CE_5863_41D1_DF820A37AFE8); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_9036AE53_89FA_D87C_41DC_46D1D94F827A",
   "pitch": -0.77,
   "yaw": 178.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_86280778_89CA_C82E_41AE_FF40A8E2E30F",
 "maps": [
  {
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.77
  }
 ]
},
{
 "progressBarBorderColor": "#0066FF",
 "data": {
  "name": "ViewerArea39684"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid93451989_89CE_58EF_41D1_0D83E40C375D",
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": true,
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "mode": "push",
 "height": 58,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton VR"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": true,
 "maxHeight": 37,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "paddingLeft": 0,
 "right": 30,
 "width": 100,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "maxWidth": 49,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "bottom": 8,
 "mode": "push",
 "height": 75,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton VR"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": true,
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "visible": false,
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton HS "
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": true,
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "visible": false,
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD, this.camera_90602B50_89CE_587C_41D7_66ABA5C30F59); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.49,
   "image": "this.AnimatedImageResource_91E2BDA3_89C7_D8DC_41DD_06B50A184971",
   "pitch": -1.66,
   "yaw": 116.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9834E645_89C6_4864_41D8_64D6647EBB37",
 "maps": [
  {
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85, this.camera_90548B5F_89CE_5863_41B8_F37B43F5823B); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 07"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.49,
   "image": "this.AnimatedImageResource_91E21DA3_89C7_D8DC_41D5_87729D23222B",
   "pitch": -9.29,
   "yaw": -40.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9BBCBFB5_89DB_D827_41BD_0101F7B26455",
 "maps": [
  {
   "hfov": 10.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82FF2681_89BB_C8DC_4191_46CACD636943, this.camera_9321B9B8_89CE_582C_41DA_6952335EE482); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 07"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.03,
   "image": "this.AnimatedImageResource_91E3FDA4_89C7_D824_41C3_6D750140ADC2",
   "pitch": -11.45,
   "yaw": 146.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A75A900_89DA_F9DC_41D7_EDEFB3DC6FD2",
 "maps": [
  {
   "hfov": 12.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82820565_89BA_4827_41D8_7A1426A86E84, this.camera_90CD5AE2_89CE_585D_41E1_39E53B290670); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.48,
   "image": "this.AnimatedImageResource_91E08D99_89C7_D8EF_41E1_1B36ADAC1B40",
   "pitch": -3.39,
   "yaw": 45.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_86655D86_89CE_58E4_41BB_3AD7A4A52528",
 "maps": [
  {
   "hfov": 12.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0, this.camera_90CA8AE2_89CE_585D_41DA_3858CF15F807); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.48,
   "image": "this.AnimatedImageResource_91E0BD99_89C7_D8EF_41E0_2D3CD539E862",
   "pitch": -3.39,
   "yaw": -67.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8634C4B7_89CE_4823_4194_8FB1ABF5709E",
 "maps": [
  {
   "hfov": 12.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD, this.camera_90C6DAD2_89CE_587D_41B8_F9E1B4546ADF); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_913211C8_89DE_C86D_419E_B310D2A73B9F",
   "pitch": -0.52,
   "yaw": 101.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9E6067BF_89DA_C824_41A6_2BE72DFF1BF6",
 "maps": [
  {
   "hfov": 12.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.52
  }
 ]
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid93451989_89CE_58EF_41D1_0D83E40C375D",
 "id": "viewer_uid93451989_89CE_58EF_41D1_0D83E40C375DVideoPlayer",
 "displayPlaybackBar": true
},
{
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": 110,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 110,
 "layout": "horizontal",
 "shadow": false,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "button menu sup"
 }
},
{
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "width": "91.304%",
 "bottom": "0%",
 "contentOpaque": false,
 "height": "85.959%",
 "layout": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "gap": 3,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "-button set"
 }
},
{
 "propagateClick": false,
 "maxHeight": 230,
 "id": "Image_9AB3F070_89DE_483D_41D8_8FF6AC497AD4",
 "paddingLeft": 0,
 "left": "0%",
 "width": "19.197%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_9AB3F070_89DE_483D_41D8_8FF6AC497AD4.png",
 "maxWidth": 495,
 "top": "11.28%",
 "verticalAlign": "middle",
 "height": "36.842%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "Image",
 "data": {
  "name": "Image23332"
 }
},
{
 "propagateClick": true,
 "maxHeight": 2,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "paddingLeft": 0,
 "left": "0%",
 "right": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "verticalAlign": "middle",
 "maxWidth": 3000,
 "bottom": 53,
 "height": 2,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "Image",
 "data": {
  "name": "white line"
 }
},
{
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "scrollBarColor": "#000000",
 "paddingLeft": 30,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "height": 51,
 "layout": "horizontal",
 "shadow": false,
 "scrollBarMargin": 2,
 "gap": 3,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "-button set container"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "10%",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "5%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": true,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "left": "10%",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "layout": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "right",
 "paddingRight": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "10%",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "5%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": true,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "left": "10%",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "layout": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "right",
 "paddingRight": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "top": "7%",
 "bottom": "7%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "top": "7%",
 "bottom": "7%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "top": "7%",
 "bottom": "7%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "top": "7%",
 "bottom": "7%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "10%",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "5%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": true,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "left": "10%",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "layout": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "right",
 "paddingRight": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "id": "Container_9F79B525_89C9_C827_41D0_15631118B64A",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.WebFrame_9F794525_89C9_C827_41C8_5C2AB175380A"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": true,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowSpread": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_9F795525_89C9_C827_41D0_D8B8B234A695",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_9F797525_89C9_C827_418D_629F45E5B0F7"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "layout": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "right",
 "paddingRight": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91FE9D96_89C7_D8E5_41A9_05E6750802CC",
 "levels": [
  {
   "url": "media/panorama_85C85D7A_89BA_582D_41D7_C0E18DB05F8A_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E2DD9A_89C7_D8ED_4192_E4996A574239",
 "levels": [
  {
   "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E2AD9D_89C7_D8E7_41BC_C0D13D152ED0",
 "levels": [
  {
   "url": "media/panorama_828708FD_89BB_D824_41D6_267D5E1EFB70_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E3ADA2_89C7_D8DC_41CC_3BAD21E38E13",
 "levels": [
  {
   "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E2EDA3_89C7_D8DC_41D7_CE5E9F4CD2A6",
 "levels": [
  {
   "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_90231E58_89FA_D86C_41D3_13C7CE685CD7",
 "levels": [
  {
   "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_913371C6_89DE_C865_41C6_B24637532792",
 "levels": [
  {
   "url": "media/panorama_82846C95_89BB_F8E4_41E0_093479BC7BBD_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91FFCD98_89C7_D8EC_41D6_0EC9D281620D",
 "levels": [
  {
   "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91FFFD98_89C7_D8EC_41D7_3DE59EE92AB3",
 "levels": [
  {
   "url": "media/panorama_828E774E_89BA_4865_41D7_DF521A15112E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 420,
   "height": 330
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E00D99_89C7_D8EF_41D7_A67DC1A917AD",
 "levels": [
  {
   "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E1DD99_89C7_D8EF_41C8_A98A4208ACF3",
 "levels": [
  {
   "url": "media/panorama_82820565_89BA_4827_41D8_7A1426A86E84_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E1AD99_89C7_D8EF_41DF_7D5F7AADD17E",
 "levels": [
  {
   "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E17D9A_89C7_D8ED_41D6_40D2A95B10F2",
 "levels": [
  {
   "url": "media/panorama_82870F01_89BB_B9DF_41C5_810B79E53D80_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E27DA0_89C7_D8DD_41D7_3A9E3D6B0133",
 "levels": [
  {
   "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E3CDA2_89C7_D8DC_41BD_76EFCCD8DC6D",
 "levels": [
  {
   "url": "media/panorama_828382B9_89BB_C82F_41DA_F90FFB6A2A90_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91FF5D98_89C7_D8EC_41E0_4DBA1167389F",
 "levels": [
  {
   "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_9036AE53_89FA_D87C_41DC_46D1D94F827A",
 "levels": [
  {
   "url": "media/panorama_8299C1B4_89BA_4825_41D3_F7B807556EC0_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E2BDA3_89C7_D8DC_41DD_06B50A184971",
 "levels": [
  {
   "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E21DA3_89C7_D8DC_41D5_87729D23222B",
 "levels": [
  {
   "url": "media/panorama_82FF2681_89BB_C8DC_4191_46CACD636943_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E3FDA4_89C7_D824_41C3_6D750140ADC2",
 "levels": [
  {
   "url": "media/panorama_9B5C7F64_89DA_D825_41DD_FCBCCFDC1F85_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E08D99_89C7_D8EF_41E1_1B36ADAC1B40",
 "levels": [
  {
   "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_91E0BD99_89C7_D8EF_41E0_2D3CD539E862",
 "levels": [
  {
   "url": "media/panorama_82FECB72_89BA_583D_41B9_D6D4AD4EF7C4_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_913211C8_89DE_C86D_419E_B310D2A73B9F",
 "levels": [
  {
   "url": "media/panorama_91077EA7_89DA_7824_41C5_453FD7FF8EC8_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": true,
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingLeft": 0,
 "width": 60,
 "minWidth": 1,
 "borderSize": 0,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 60,
 "shadow": false,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 1,
 "class": "IconButton",
 "data": {
  "name": "image button menu"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": true,
 "maxHeight": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "mode": "push",
 "height": 58,
 "shadow": false,
 "click": "this.shareTwitter(window.location.href)",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": true,
 "maxHeight": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "mode": "push",
 "height": 58,
 "shadow": false,
 "click": "this.openLink('https://www.facebook.com/getchurch.pm/?paipv=0&eav=AfahY2BYlFWWFM8uHUxeSZNuyMoLS70MsnAFrostZS5WGlkxpVON84jLE1ZFKf-bWHY&_rdr', '_blank')",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton FB"
 }
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0,
  0.98
 ],
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "propagateClick": true,
 "width": 92,
 "data": {
  "name": "Button house info"
 },
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 1,
 "shadowSpread": 1,
 "iconHeight": 0,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "height": 40,
 "mode": "push",
 "fontSize": 12,
 "shadow": false,
 "label": "INFO GET",
 "backgroundColor": [
  "#FF6600",
  "#EECB11"
 ],
 "shadowBlurRadius": 15,
 "layout": "horizontal",
 "gap": 5,
 "iconBeforeLabel": true,
 "click": "this.openLink('http://getchurch.com.br/links/', '_blank')",
 "fontStyle": "normal",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverShadow": false,
 "backgroundOpacity": 0.82,
 "paddingRight": 0,
 "borderRadius": 4,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 0,
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "propagateClick": true,
 "width": 99,
 "data": {
  "name": "Button panorama list"
 },
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 1,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "height": 40,
 "mode": "push",
 "fontSize": 12,
 "shadow": false,
 "label": "INSTAGRAM",
 "backgroundColor": [
  "#FF6600",
  "#FED500"
 ],
 "shadowBlurRadius": 15,
 "layout": "horizontal",
 "gap": 5,
 "iconBeforeLabel": true,
 "click": "this.openLink('https://www.instagram.com/getchurch.presidentemedici/', '_blank')",
 "fontStyle": "normal",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.87,
 "paddingRight": 0,
 "borderRadius": 4,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "propagateClick": true,
 "width": 103,
 "data": {
  "name": "Button location"
 },
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 1,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "height": 40,
 "mode": "push",
 "fontSize": 12,
 "shadow": false,
 "label": "LOCALIZA\u00c7\u00c3O",
 "backgroundColor": [
  "#FF6600",
  "#FAD102"
 ],
 "shadowBlurRadius": 15,
 "layout": "horizontal",
 "gap": 5,
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_9F790525_89C9_C827_41AD_DAA56F1354AB, true, 0, null, null, false)",
 "fontStyle": "normal",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.84,
 "paddingRight": 0,
 "borderRadius": 4,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "bold"
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "width": "85%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "center",
 "minHeight": 1,
 "data": {
  "name": "-left"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "paddingLeft": 50,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "minWidth": 460,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.51,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "width": "50%",
 "gap": 0,
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingRight": 50,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 20,
 "overflow": "visible",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "-right"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "maxWidth": 60,
 "width": "25%",
 "verticalAlign": "middle",
 "mode": "push",
 "height": "75%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "width": "85%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "center",
 "minHeight": 1,
 "data": {
  "name": "-left"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "paddingLeft": 50,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "minWidth": 460,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.51,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "width": "50%",
 "gap": 0,
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingRight": 50,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 20,
 "overflow": "visible",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "-right"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "maxWidth": 60,
 "width": "25%",
 "verticalAlign": "middle",
 "mode": "push",
 "height": "75%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": 140,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "header"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailWidth": 220,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "scrollBarColor": "#04A3E1",
 "itemMode": "normal",
 "paddingLeft": 70,
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "minWidth": 1,
 "itemMaxWidth": 1000,
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemMaxHeight": 1000,
 "itemThumbnailOpacity": 1,
 "itemLabelFontStyle": "normal",
 "width": "100%",
 "itemLabelFontFamily": "Montserrat",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "verticalAlign": "middle",
 "itemBorderRadius": 0,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "shadow": false,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "height": "100%",
 "itemOpacity": 1,
 "itemHorizontalAlign": "center",
 "itemBackgroundOpacity": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "backgroundOpacity": 0.05,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "class": "ThumbnailGrid",
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "paddingRight": 70,
 "itemBackgroundColorRatios": [],
 "itemThumbnailBorderRadius": 0,
 "propagateClick": false,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "borderSize": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "backgroundColorDirection": "vertical",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemVerticalAlign": "top",
 "itemLabelFontColor": "#666666",
 "itemHeight": 156,
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 125,
 "itemThumbnailShadow": false,
 "paddingTop": 10,
 "borderRadius": 5,
 "itemPaddingBottom": 3,
 "horizontalAlign": "center",
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": 140,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "header"
 }
},
{
 "progressBarBorderColor": "#0066FF",
 "data": {
  "name": "Floor Plan"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": 140,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "header"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "Container photo"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "Container photo"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "width": "55%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "center",
 "minHeight": 1,
 "data": {
  "name": "-left"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "paddingLeft": 60,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "minWidth": 460,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.51,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "width": "45%",
 "gap": 0,
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 20,
 "overflow": "visible",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "-right"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "maxWidth": 60,
 "width": "25%",
 "verticalAlign": "middle",
 "mode": "push",
 "height": "75%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_9F794525_89C9_C827_41C8_5C2AB175380A",
 "propagateClick": false,
 "paddingLeft": 0,
 "minWidth": 1,
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14207.753531706798!2d-52.60935!3d-27.0952387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b7ddfecbaf77%3A0xa42fac02bca8696b!2sGet%20Church%20-%20Presidente%20Med%C3%ADci!5e0!3m2!1spt-PT!2suk!4v1685940682036!5m2!1spt-PT!2suk",
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "insetBorder": false,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "WebFrame",
 "paddingBottom": 0,
 "minHeight": 1,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_9F797525_89C9_C827_418D_629F45E5B0F7",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_9F797525_89C9_C827_418D_629F45E5B0F7.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "maxWidth": 60,
 "width": "25%",
 "verticalAlign": "middle",
 "mode": "push",
 "height": "75%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_9F790525_89C9_C827_41AD_DAA56F1354AB, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_9F797525_89C9_C827_418D_629F45E5B0F7_rollover.jpg",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_9F797525_89C9_C827_418D_629F45E5B0F7_pressed.jpg",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "X"
 }
},
{
 "propagateClick": false,
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "paddingLeft": 0,
 "left": "0%",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "maxWidth": 2000,
 "top": "0%",
 "verticalAlign": "middle",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "Image",
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": false,
 "height": 60,
 "width": "100%",
 "gap": 0,
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "right",
 "minHeight": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "minWidth": 100,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.79,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 30,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "minHeight": 520,
 "data": {
  "name": "Container text"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "propagateClick": false,
 "width": 370,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "Container space"
 }
},
{
 "transitionDuration": 500,
 "data": {
  "name": "Viewer info 1"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "paddingLeft": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "left": 0,
 "toolTipBorderColor": "#767676",
 "right": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "bottom": 0,
 "top": 0,
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "playbackBarHeadHeight": 15
},
{
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "top": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": "100%",
 "layout": "horizontal",
 "shadow": false,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "Container arrows"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": false,
 "height": 60,
 "width": "100%",
 "gap": 0,
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "right",
 "minHeight": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "minWidth": 100,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.79,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 30,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "minHeight": 520,
 "data": {
  "name": "Container text"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "paddingLeft": 0,
 "propagateClick": false,
 "width": 370,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "Container space"
 }
},
{
 "minHeight": 100,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "scrollBarColor": "#000000",
 "paddingLeft": 80,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "width": "77.115%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "paddingBottom": 0,
 "paddingRight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "right",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "maxWidth": 60,
 "top": 20,
 "width": "100%",
 "verticalAlign": "top",
 "mode": "push",
 "height": "36.14%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 }
},
{
 "minHeight": 100,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "scrollBarColor": "#000000",
 "paddingLeft": 80,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "width": "77.115%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "paddingBottom": 0,
 "paddingRight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "right",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "right": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "maxWidth": 60,
 "top": 20,
 "width": "100%",
 "verticalAlign": "top",
 "mode": "push",
 "height": "36.14%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 }
},
{
 "minHeight": 100,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "scrollBarColor": "#000000",
 "paddingLeft": 80,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "width": "77.115%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "paddingBottom": 0,
 "paddingRight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "right",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "paddingLeft": 0,
 "right": 20,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "maxWidth": 60,
 "top": 20,
 "width": "100%",
 "verticalAlign": "top",
 "mode": "push",
 "height": "36.14%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 }
},
{
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "playbackBarHeadHeight": 15
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "paddingLeft": 0,
 "left": 10,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "minWidth": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "mode": "push",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton <"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "paddingLeft": 0,
 "right": 10,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "minWidth": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "mode": "push",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton >"
 }
},
{
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#0066FF",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "playbackBarHeadHeight": 15
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "paddingLeft": 0,
 "left": 10,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "minWidth": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "mode": "push",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton <"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "minWidth": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "mode": "push",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton >"
 }
},
{
 "transparencyActive": false,
 "horizontalAlign": "right",
 "propagateClick": false,
 "maxHeight": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "maxWidth": 60,
 "top": 20,
 "width": "10%",
 "verticalAlign": "top",
 "mode": "push",
 "height": "10%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 }
},
{
 "propagateClick": false,
 "maxHeight": 1000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "paddingLeft": 0,
 "left": "0%",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "maxWidth": 2000,
 "top": "0%",
 "verticalAlign": "bottom",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "class": "Image",
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": false,
 "height": 60,
 "width": "100%",
 "gap": 0,
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "right",
 "minHeight": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "minWidth": 100,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.79,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 30,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "minHeight": 520,
 "data": {
  "name": "Container text"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingLeft": 0,
 "propagateClick": false,
 "width": 370,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "Container space"
 }
},
{
 "minHeight": 1,
 "propagateClick": false,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.72vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.72vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.36vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.36vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.69vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.69vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.7vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "propagateClick": false,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Bebas Neue Bold",
 "width": "46%",
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "shadow": false,
 "label": "lorem ipsum",
 "height": "9%",
 "shadowBlurRadius": 6,
 "layout": "horizontal",
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "normal"
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": false,
 "maxHeight": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "minWidth": 70,
 "borderSize": 0,
 "maxWidth": 150,
 "width": "12%",
 "verticalAlign": "middle",
 "mode": "push",
 "height": "8%",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 70,
 "class": "IconButton",
 "data": {
  "name": "IconButton <"
 }
},
{
 "minHeight": 1,
 "propagateClick": false,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "width": "80%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": "30%",
 "layout": "absolute",
 "shadow": false,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "Container separator"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": false,
 "maxHeight": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "minWidth": 70,
 "borderSize": 0,
 "maxWidth": 150,
 "width": "12%",
 "verticalAlign": "middle",
 "mode": "push",
 "height": "8%",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "minHeight": 70,
 "class": "IconButton",
 "data": {
  "name": "IconButton >"
 }
},
{
 "minHeight": 1,
 "propagateClick": false,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.72vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.72vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.36vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.36vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.69vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "propagateClick": false,
 "shadowColor": "#000000",
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Bebas Neue Bold",
 "width": "46%",
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "shadow": false,
 "label": "lorem ipsum",
 "height": "9%",
 "shadowBlurRadius": 6,
 "layout": "horizontal",
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "normal"
},
{
 "minHeight": 1,
 "propagateClick": false,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "height": "45%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.05vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadow": false,
 "height": "80%",
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "minHeight": 1,
 "data": {
  "name": "- content"
 }
},
{
 "minHeight": 1,
 "propagateClick": false,
 "maxHeight": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "width": "25%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "maxWidth": 200,
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "paddingRight": 0,
 "class": "Image",
 "data": {
  "name": "agent photo"
 }
},
{
 "minHeight": 1,
 "propagateClick": false,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "75%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.36vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.85vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.playAudioList([this.audio_9DC34E36_89DA_D825_418D_AEFE29829113]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Container_9F790525_89C9_C827_41AD_DAA56F1354AB",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "minWidth": 20,
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "defaultVRPointer": "laser",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){  window[key] = value; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "unregisterKey": function(key){  delete window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "borderRadius": 0,
 "class": "Player",
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "minHeight": 20,
 "width": "100%",
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
