/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var tabs = ["map-tab", "events-tab", "leaderboard"]
var coordinates =[[-122.253281, 37.870222], [-122.259604, 37.872446], [-122.264737, 37.873422], [-122.262816, 37.868604]]
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        //app.initializeMap()
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    hidePopup: function(id){
       var popup = document.getElementById(id);
       popup.classList.remove("show");
       popup.classList.add("hide");

    },
    showPopup: function(id){
        var popup = document.getElementById("confirm-attendance");
        popup.classList.add("show");
    },
    showStartPage: function() {
        document.getElementById('startpage').style.display = 'block'; 
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('homepage').style.display = 'none';
        app.initializeMap()
        document.body.style.backgroundImage = "none";
        var popup = document.getElementById("instructions");
        popup.classList.add("show");
    },
    initializeMap: function() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhbGl1IiwiYSI6ImNqOWdudjNpdDJ6eXoyd3A5MmxxeTV1ZGMifQ.2P9d2RHzp_oDPb1IfasI4g';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [-122.259065, 37.871811],
            zoom: 14
        });
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
        console.log("hello");
        map.resize()
        // for (var i = 1; i < 5; i++) {
        //     var imageURL = "icon" + i.toString() + ".png"
        //     var iconName = "icon" + i.toString()
        //     var idName = "points" + i.toString()
        //     console.log("image url", imageURL)
        //     map.on('load', function() {
        //         map.loadImage(imageURL, function(error, image) {
        //             if (error) throw error;
        //             map.addImage(iconName, image);
        //             map.addLayer({
        //                 "id": idName,
        //                 "type": "symbol",
        //                 "source": {
        //                     "type": "geojson",
        //                     "data": {
        //                         "type": "FeatureCollection",
        //                         "features": [{
        //                             "type": "Feature",
        //                             "properties": {
        //                                 "description": "<p id='description'>Description 1.</p>",
        //                                 "icon":  iconName
        //                             },
        //                             "geometry": {
        //                                 "type": "Point",
        //                                 "coordinates": coordinates[i-1]
        //                             }
        //                         }]
        //                     }
        //                 },
        //                 "layout": {
        //                     "icon-image": iconName,
        //                     "icon-size": 0.25
        //                 }
        //             });
        //         });
        //     });
        //     map.on('click', idName, function (e) {
        //         new mapboxgl.Popup()
        //             .setLngLat(e.features[0].geometry.coordinates)
        //             .setHTML(e.features[0].properties.description)
        //             .addTo(map);
        //     });
        // }
        map.on('load', function() {
            map.loadImage('icon1.png', function(error, image) {
                if (error) throw error;
                map.addImage('icon1', image);
                map.addLayer({
                    "id": "points",
                    "type": "symbol",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": [{
                                "type": "Feature",
                                "properties": {
                                    "description": "<p id='description'><strong>Free Speech in Social Media</strong><br><br>Panel on the impacts and implications of social media on free speech today.<br><br>Location: 160 Boalt Hall<br>Time: Wed 10/4, 7-8 PM<div class='rsvp' onclick='app.showPopup('confirm-attendance')'>RSVP</div></p>",
                                    "icon":  "icon1"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-122.253281, 37.870222]
                                }
                            }]
                        }
                    },
                    "layout": {
                        "icon-image": "icon1",
                        "icon-size": 0.25
                    }
                });
            });
        });
        map.on('load', function() {
            map.loadImage('icon2.png', function(error, image) {
                if (error) throw error;
                map.addImage('icon2', image);
                map.addLayer({
                    "id": "points2",
                    "type": "symbol",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": [{
                                "type": "Feature",
                                "properties": {
                                    "description": "<p id='description'><strong>Reply All: Free Speech in the Age of Social Media</strong><br><br>A selection of panels and open discussions with faculty, students and staff addressing the history, practice, and spaces of free speech within the university.<br><br>Location: Doe Library<br>Time: Thu 10/5, 9:30 AM - 6:30 PM<div id='rsvp'>RSVP</div></p>",
                                    "icon":  "icon2"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-122.259604, 37.872446]
                                }
                            }]
                        }
                    },
                    "layout": {
                        "icon-image": "icon2",
                        "icon-size": 0.25
                    }
                });
            });
        });
        map.on('load', function() {
            map.loadImage('icon3.png', function(error, image) {
                if (error) throw error;
                map.addImage('icon3', image);
                map.addLayer({
                    "id": "points3",
                    "type": "symbol",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": [{
                                "type": "Feature",
                                "properties": {
                                    "description": "<p id='description'><strong>Free Speech on Campus: A Discussion with Dean Erwin Chemerinsky in Honor of Constitution Day</strong><br><br>In his new book, Free Speech on Campus, written with Howard Gillman, they argue that campuses must provide supportive learning environments for an increasingly diverse student body but at the same time must never restrict the expression of ideas.<br><br>Location: Li Ka Shing 256<br>Time: Tue 10/10, 6-8 PM<div id='rsvp'>RSVP</div></p>",
                                    "icon":  "icon3"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-122.264737, 37.873422]
                                }
                            }]
                        }
                    },
                    "layout": {
                        "icon-image": "icon3",
                        "icon-size": 0.25
                    }
                });
            });
        });
        map.on('load', function() {
            map.loadImage('icon4.png', function(error, image) {
                if (error) throw error;
                map.addImage('icon4', image);
                map.addLayer({
                    "id": "points4",
                    "type": "symbol",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": [{
                                "type": "Feature",
                                "properties": {
                                    "description": "<p id='description'><strong>Free Speech Week: A Dialogue on What Makes Trump a Great President</strong><br><br>An open discussion on how Trump has improved our country in the past two years, and what he has in store for America’s future - <em>This event is meant to be an open dialogue, please respect all opinions presented.</em><br><br>Location: RSF Fieldhouse<br>Time: Thu 10/12, 8-10 PM<div id='rsvp'>RSVP</div></p>",
                                    "icon":  "icon4"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-122.262816, 37.868604]
                                }
                            }]
                        }
                    },
                    "layout": {
                        "icon-image": "icon4",
                        "icon-size": 0.25
                    }
                });
            });
        });
        map.on('click', 'points', function (e) {
            new mapboxgl.Popup()
                .setLngLat(e.features[0].geometry.coordinates)
                .setHTML(e.features[0].properties.description)
                .addTo(map);
        });
        map.on('click', 'points2', function (e) {
            new mapboxgl.Popup()
                .setLngLat(e.features[0].geometry.coordinates)
                .setHTML(e.features[0].properties.description)
                .addTo(map);
        });
        map.on('click', 'points3', function (e) {
            new mapboxgl.Popup()
                .setLngLat(e.features[0].geometry.coordinates)
                .setHTML(e.features[0].properties.description)
                .addTo(map);
        });
        map.on('click', 'points4', function (e) {
            new mapboxgl.Popup()
                .setLngLat(e.features[0].geometry.coordinates)
                .setHTML(e.features[0].properties.description)
                .addTo(map);
        });
        map.on('click', 'points1', function (e) {
            map.flyTo({center: e.features[0].geometry.coordinates});
        });
    },
    changeActiveTab: function(id) {
        document.getElementById(id).classList.add("active")
        console.log("ACTIVE:", id);
        for (var i = 0; i < tabs.length; i++) {
            if (! (id==tabs[i])) {
                console.log("LOOP:", tabs[i])
                document.getElementById(tabs[i]).classList.remove("active")
            }
        }

    }
};
