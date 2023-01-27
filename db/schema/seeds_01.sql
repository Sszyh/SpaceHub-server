insert into users (id, email, password, user_type, first_name, last_name, created_at, phone_number) values (1, 'iebertz0@jiathis.com', 'cPr89j', 'host', 'Ichabod', 'Ebertz', '10/20/2022', '671-176-7920');
insert into users (id, email, password, user_type, first_name, last_name, created_at, phone_number) values (2, 'hduchart1@cmu.edu', 'CzVFR1QDc', 'host', 'Hatti', 'Duchart', '7/21/2022', '630-920-5737');
insert into users (id, email, password, user_type, first_name, last_name, created_at, phone_number) values (3, 'ysergeant2@jugem.jp', 'tXVHcBQ', 'user', 'Ysabel', 'Sergeant', '10/15/2022', '258-901-3407');
insert into users (id, email, password, user_type, first_name, last_name, created_at, phone_number) values (4, 'jjearum3@sciencedirect.com', 'zAoePA', 'user', 'Jude', 'Jearum', '5/5/2022', '342-857-2615');
insert into users (id, email, password, user_type, first_name, last_name, created_at, phone_number) values (5, 'brodway4@dell.com', 'f2Ld1J', 'user', 'Brianna', 'Rodway', '6/13/2022', '155-550-2873');

insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (1, 1, 'Tresom', 'https://pixabay.com/photos/interior-living-room-furniture-2685521/', 'Canada', '632 Rockefeller Road', 'Sparwood', 'Alberta', 'M2J', -73.81669,45.44868, 93, 1, 'Ballroom', true, false, '4/22/2022', '4/26/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (2, 1, 'Matsoft', 'https://pixabay.com/photos/chairs-conference-room-contemporary-2181994/', 'Canada', '20 Mallard Place', 'Gjoa Haven', 'Nunavut', 'J7R', -73.81669, 45.44868, 87, 5, 'Studio', true, true, '6/13/2022', '6/15/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (3, 1, 'Solarbreeze', 'https://pixabay.com/photos/architecture-building-room-interior-2576906/', 'Canada', '20 Pleasure Place', 'SainteSophie', 'Newfoundland and Labrador', 'J5J', -73.86586, 45.43341, 99, 3, 'Retail', true, false, '3/28/2022', '4/2/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (4, 2, 'Bigtax', 'https://pixabay.com/photos/chairs-floor-furniture-indoors-2181947/', 'Canada', '63392 Acker Pass', 'Cochrane', 'Quebec', 'T4C', -79.2663, 43.86682, 71, 4, 'Ballroom', false, false, '8/29/2022', '9/3/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (5, 1, 'Regrant', 'https://pixabay.com/photos/home-sofa-living-room-decoration-1622401/', 'Canada', '6366 Bultman Road', 'Bassano', 'Quebec', 'M5G', -113.3187, 53.51684, 51, 3, 'Event Venue', false, true, '8/14/2022', '8/18/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (6, 2, 'Opela', 'https://cdn.pixabay.com/photo/2015/01/12/10/44/lost-places-597166__340.jpg', 'Canada', '4 Superior Circle', 'Stonewall', 'Prince Edward Island', 'H9J', -73.58248, 45.40008, 68, 5, 'Event Venue', false, false, '2/27/2022', '3/2/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (7, 1, 'Prodder', 'https://cdn.pixabay.com/photo/2017/03/28/12/13/chairs-2181968__340.jpg', 'Canada', '7 Spenser Pass', 'Waterloo', 'Manitoba', 'N2L', -73.81669, 45.44868, 98, 1, 'Rehearsal', true, true, '7/1/2022', '7/5/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (8, 2, 'Konklux', 'https://cdn.pixabay.com/photo/2016/11/21/12/59/couch-1845270__340.jpg', 'Canada', '000 Spaight Way', 'Blainville', 'British', 'J7J', -79.2663, 43.86682, 59, 4, 'Event Venue', false, true, '3/3/2022', '3/6/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (9, 1, 'Regrant', 'https://cdn.pixabay.com/photo/2020/01/20/10/33/room-4779953__340.jpg', 'Canada', '815 Tennyson Crossing', 'ThetfordMines', 'New Brunswick', 'G6G', -73.58248, 45.40008, 50, 2, 'Space', true, true, '1/19/2023', '1/21/2023');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (10, 1, 'Job', 'https://cdn.pixabay.com/photo/2020/05/25/17/54/library-5219747__340.jpg', 'Canada', '524 Stone Corner Park', 'Hudson', 'British', 'J0N', -80.38297, 42.8334, 73, 2, 'Event Venue', true, false, '7/15/2022', '7/18/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (11, 5, 'Stim', 'https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', 'Canada', '96 South Circle', 'Wuxue Shi', 'Yukon', 'null', -119.27337,50.26729, 76, 2, 'Exhibition', true, true, '8/20/2022', '8/25/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (12, 4, 'Quo Lux', 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'Canada', '4 Kingsford Parkway', 'Viesīte', 'Alberta', 'null', -119.48568,49.88307, 78, 4, 'Event Venue', false, true, '1/27/2022', '1/29/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (13, 4, 'Bytecard', 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'Canada', '2219 Mcbride Circle', 'Āshtīān', 'Saskatchewan', 'null', -113.3187, 53.51684, 30, 5, 'Studio', false, false, '11/12/2022', '11/12/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (14, 5, 'Toughjoyfax', 'https://images.unsplash.com/photo-1636226570637-3fbda7ca09dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80', 'Canada', '402 Dorton Parkway', 'Jhumra', 'British Columbia', '50355', -73.75335, 45.4473, 88, 4, 'Ballroom', true, true, '4/24/2022', '4/27/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (15, 5, 'Trippledex', 'https://images.unsplash.com/photo-1613666517563-d19a4585d1fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80', 'Canada', '42910 Bunker Hill Parkway', 'Raków', 'Nova Scotia', '26-035', -79.2663, 43.86682, 33, 2, 'Retail', false, true, '10/18/2022', '10/21/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (16, 1, 'Domainer', 'https://plus.unsplash.com/premium_photo-1661770246947-e08d8f84368c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'Canada', '5 Hoard Terrace', 'Mencon', 'Northwest Territories', 'null', -73.75335, 45.4473, 47, 2, 'Ballroom', false, true, '6/7/2022', '6/10/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (17, 4, 'Bitwolf', 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80', 'Canada', '22418 Fuller Court', 'Asheville', 'Northwest Territories', '28805', -63.13414, 46.23899, 75, 4, 'Event Venue', false, false, '11/27/2022', '12/1/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (18, 3, 'Bamity', 'https://images.unsplash.com/photo-1586195831465-e769c717f1e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'Canada', '697 Fremont Hill', 'Sokol', 'Ontario', '162139', -119.27337,50.26729, 57, 2, 'Ballroom', true, false, '12/16/2022', '12/17/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (19, 1, 'Cardguard', 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'Canada', '2435 Mallory Park', 'Gemuruh', 'Nunavut', 'null', -79.2663, 43.86682, 85, 2, 'Rehearsal Space', false, true, '10/2/2022', '10/3/2022');
insert into properties (id, user_id, title, image_url, country, street, city, province, post_code, coord_long, coord_lat, price_per_day, average_rating, category, wheelchair, wifi, created_at, updated_at) values (20, 5, 'Stringtough', 'https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'Canada', '39 Porter Trail', 'Longshi', 'Alberta', 'null', -113.3187, 53.51684, 53, 5, 'Event Venue', true, true, '11/25/2022', '11/28/2022');

insert into bookings (id, user_id, property_id, check_in_date, check_out_date, price_per_day, price_for_stay, created_at, updated_at) values (1, 1, 5, '2/9/2022', '2/11/2022', 38, 76, '2/5/2022', '2/15/2022');
insert into bookings (id, user_id, property_id, check_in_date, check_out_date, price_per_day, price_for_stay, created_at, updated_at) values (2, 5, 8, '1/7/2023', '1/8/2023', 27, 27, '1/6/2023', '1/10/2023');
insert into bookings (id, user_id, property_id, check_in_date, check_out_date, price_per_day, price_for_stay, created_at, updated_at) values (3, 4, 2, '4/1/2022', '4/2/2022', 81, 81, '4/1/2022', '4/7/2022');
insert into bookings (id, user_id, property_id, check_in_date, check_out_date, price_per_day, price_for_stay, created_at, updated_at) values (4, 2, 4, '2/22/2022', '2/27/2022', 47, 235, '2/17/2022', '3/1/2022');
insert into bookings (id, user_id, property_id, check_in_date, check_out_date, price_per_day, price_for_stay, created_at, updated_at) values (5, 2, 5, '2/10/2022', '2/11/2022', 52, 52, '2/7/2022', '2/12/2022');
insert into bookings (id, user_id, property_id, check_in_date, check_out_date, price_per_day, price_for_stay, created_at, updated_at) values (6, 5, 6, '9/24/2022', '9/26/2022', 46, 92, '9/24/2022', '9/27/2022');
insert into bookings (id, user_id, property_id, check_in_date, check_out_date, price_per_day, price_for_stay, created_at, updated_at) values (7, 4, 5, '1/26/2022', '1/30/2022', 28, 112, '1/25/2022', '2/1/2022');
insert into bookings (id, user_id, property_id, check_in_date, check_out_date, price_per_day, price_for_stay, created_at, updated_at) values (8, 1, 5, '8/4/2022', '8/9/2022', 77, 385, '8/3/2022', '8/11/2022');
insert into bookings (id, user_id, property_id, check_in_date, check_out_date, price_per_day, price_for_stay, created_at, updated_at) values (9, 2, 7, '11/12/2022', '11/15/2022', 73, 219, '11/8/2022', '11/17/2022');
insert into bookings (id, user_id, property_id, check_in_date, check_out_date, price_per_day, price_for_stay, created_at, updated_at) values (10, 1, 9, '9/3/2022', '9/6/2022', 67, 201, '8/31/2022', '9/7/2022');

insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (1, 1, 8, 4, '8/17/2022', '8/19/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (2, 4, 9, 5, '4/11/2022', '4/12/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (3, 4, 9, 4, '2/28/2022', '3/5/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (4, 4, 8, 4, '1/18/2023', '1/19/2023');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (5, 5, 10, 1, '7/16/2022', '7/19/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (6, 5, 7, 4, '6/4/2022', '6/7/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (7, 3, 7, 2, '3/29/2022', '4/1/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (8, 5, 8, 5, '5/2/2022', '5/4/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (9, 2, 10, 1, '9/9/2022', '9/12/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (10, 2, 6, 1, '10/14/2022', '10/19/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (11, 5, 8, 5, '7/30/2022', '8/4/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (12, 3, 6, 5, '8/9/2022', '8/13/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (13, 3, 6, 4, '12/5/2022', '12/7/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (14, 4, 9, 2, '1/30/2022', '2/2/2022');
insert into reviews (id, user_id, booking_id, rating, created_at, updated_at) values (15, 2, 7, 3, '1/14/2023', '1/19/2023');

