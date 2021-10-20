-- Widgets table seeds here (Example)
INSERT INTO maps (id, user_id, title, category_name) VALUES (1, 1, 'BEST FOODS HERE', 'Food');
INSERT INTO maps (id, user_id, title, category_name) VALUES (2, 1, 'REFRESHING HIKES', 'Hikes');
INSERT INTO maps (id, user_id, title, category_name) VALUES (3, 1, 'COOL BUILDINGS', 'Landmarks');

INSERT INTO pins (id, map_id, user_id, image_url, description, lat, long) VALUES (1, 1, 1, 'https://www.ctvnews.ca/polopoly_fs/1.5103049.1600026335!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg', 'McDonalds', 49.2899, -123.1300);
INSERT INTO pins (id, map_id, user_id, image_url, description, lat, long) VALUES (2, 2, 2, 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2021-01/BurgerKing.jpg?itok=TDtHHm4c', 'Buger king', 49.1212, -123.0001);
INSERT INTO pins (id, map_id, user_id, image_url, description, lat, long) VALUES (3, 3, 3, 'https://smartcdn.prod.postmedia.digital/calgaryherald/wp-content/uploads/2021/04/1009_Dairy_Queen_Fire-copy.jpg', 'Dairy queen', 49.0432, -123.4432);

