-- Widgets table seeds here (Example)
INSERT INTO maps (user_id, title, category_name, image_url) VALUES (1, 'BEST FOODS HERE', 'Food', 'http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png');
INSERT INTO maps (user_id, title, category_name, image_url) VALUES (2, 'REFRESHING HIKES', 'Hikes', 'https://atlona.com/wp-content/uploads/revslider/mountain.png');
INSERT INTO maps (user_id, title, category_name, image_url) VALUES (3, 'COOL BUILDINGS', 'Landmarks', 'https://www.kindpng.com/picc/m/21-212246_eiffel-tower-png-eiffel-tower-images-png-transparent.png');

INSERT INTO pins (map_id, user_id, image_url, description, lat, long) VALUES (1, 1, 'https://www.ctvnews.ca/polopoly_fs/1.5103049.1600026335!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg', 'McDonalds', 49.2899, -123.1300);
INSERT INTO pins (map_id, user_id, image_url, description, lat, long) VALUES (2, 2, 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2021-01/BurgerKing.jpg?itok=TDtHHm4c', 'Buger king', 49.1212, -123.0001);
INSERT INTO pins (map_id, user_id, image_url, description, lat, long) VALUES (3, 3, 'https://smartcdn.prod.postmedia.digital/calgaryherald/wp-content/uploads/2021/04/1009_Dairy_Queen_Fire-copy.jpg', 'Dairy queen', 49.0432, -123.4432);

