-- Widgets table seeds here (Example)
INSERT INTO pins (id, json_name) VALUES (1, '{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
        "name": "Test name",
        "popupContent": "user1",
        "popupimageURL": "1"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-123.1207, 49.2827]
        }
      },
      {
        "type": "Feature",
        "properties": {
        "name": "Test name",
        "popupContent": "user1",
        "popupimageURL": "2"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-122.3045, 49.0504]
        }
      }
    ]
  }');

INSERT INTO pins (id, json_name) VALUES (2, '{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
        "name": "Test name",
        "popupContent": "user2",
        "popupimageURL": "123"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-123.1207, 49.2827]
        }
      },
      {
        "type": "Feature",
        "properties": {
        "name": "Test name",
        "popupContent": "user2",
        "popupimageURL": "321"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-122.3045, 49.0504]
        }
      }
    ]
  }');

INSERT INTO pins (id, json_name) VALUES (3, '{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
        "name": "Test name",
        "popupContent": "user3",
        "popupimageURL": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-123.1207, 49.2827]
        }
      },
      {
        "type": "Feature",
        "properties": {
        "name": "Test name",
        "popupContent": "user3",
        "popupimageURL": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-122.3045, 49.0504]
        }
      }
    ]
  }');

INSERT INTO maps (id, user_id, title, pins_id, category_name) VALUES (1, 1, 'BEST FOODS HERE', 1, 'Food');
INSERT INTO maps (id, user_id, title, pins_id, category_name) VALUES (2, 1, 'REFRESHING HIKES', 2,'Hikes');
INSERT INTO maps (id, user_id, title, pins_id, category_name) VALUES (3, 1, 'COOL BUILDINGS', 3, 'Landmarks');
