var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.05805898787327202,
        "pitch": -0.17141221482824065,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.831456863955875,
          "pitch": -0.062371850839365806,
          "rotation": 0.7853981633974483,
          "target": "1-outside-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.12263538176783939,
          "pitch": -0.10772555606034295,
          "title": "Welcome to ENGINE!",
          "text": "I am a woman in STEM"
        }
      ]
    },
    {
      "id": "1-outside-engineering-auditorium",
      "name": "Outside Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3631003274783442,
        "pitch": -0.2653588752520406,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.440278832195748,
          "pitch": 0.09926120999868715,
          "rotation": 5.497787143782138,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.08312900559951153,
          "pitch": 0.0022634985139706743,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.164226744247852,
          "pitch": 0.0015490945482312668,
          "title": "Artsy",
          "text": "I've actually never seen this sculpture....."
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.032096030362629,
        "pitch": 0.10248954148405609,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.116819438891535,
          "pitch": 0.07009027734601858,
          "rotation": 5.497787143782138,
          "target": "1-outside-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9299140106591057,
          "pitch": -0.030266715314176906,
          "title": "EA Atrium",
          "text": "This place reminds me of Year 1 :)"
        }
      ]
    }
  ],
  "name": "WebTourWS-Engin",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
