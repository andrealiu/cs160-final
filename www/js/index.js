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
// function showEventPage(name) {
//     // document.getElementById('startpage').style.display = 'none';
//     // document.getElementById('confirm-page').style.display = 'block';
//     console.log("seijdoi");
// };
var pop1;
var pop2;
var pop3;
var pop4;
function remove(array, element) {
    return array.filter(e => e !== element);
    console.log("ARRAY", array)
    console.log("ELEMENT", element)
}
var my_points = 0
var map;

var rsvpd = []
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
    goBackToMap: function() {
        this.changeActiveTab("map-tab")
        document.getElementById('startpage').style.display = 'block'; 
        document.getElementById('leaderboardpage').style.display = 'none'; 
        document.getElementById('leaderboardpage').style.display = 'none'; 
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('eventspage').style.display = 'none'; 
        document.getElementById('eventspage').style.display = 'none'; 
    },
    showStartPage: function() {
        this.changeActiveTab("map-tab")
        document.getElementById('startpage').style.display = 'block'; 
        document.getElementById('leaderboardpage').style.display = 'none'; 
        document.getElementById('leaderboardpage').style.display = 'none'; 
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('eventspage').style.display = 'none'; 
        document.getElementById('eventspage').style.display = 'none'; 
        app.initializeMap()
        document.body.style.backgroundImage = "none";
        var popup = document.getElementById("instructions");
        popup.classList.add("show");
    },
    showEventPage: function(eventNum) {
        if (eventNum == 1) {
            document.getElementById('startpage').style.display = 'none';
            document.getElementById('confirm-page-1').style.display = 'block';
        }
        else if (eventNum == 2) {
            document.getElementById('startpage').style.display = 'none';
            document.getElementById('confirm-page-2').style.display = 'block';
        }
        else if (eventNum == 3) {
            document.getElementById('startpage').style.display = 'none';
            document.getElementById('confirm-page-3').style.display = 'block';
        }
        else if (eventNum == 4) {
            document.getElementById('startpage').style.display = 'none';
            document.getElementById('confirm-page-4').style.display = 'block';
        }
    },
    showAttendance: function(eventNum) {
        if (eventNum == 1) {
            document.getElementById('startpage').style.display = 'none';
            document.getElementById('attendance-pg1').style.display = 'block';
        }
        else if (eventNum == 2) {
            document.getElementById('startpage').style.display = 'none';
            document.getElementById('attendance-pg2').style.display = 'block';
        }
        else if (eventNum == 3) {
            document.getElementById('startpage').style.display = 'none';
            document.getElementById('attendance-pg3').style.display = 'block';
        }
        else if (eventNum == 4) {
            document.getElementById('startpage').style.display = 'none';
            document.getElementById('attendance-pg4').style.display = 'block';
        }
    },
    confirmEvent: function(eventNum) {
        if (eventNum == 1) {
            document.getElementById('startpage').style.display = 'block';
            document.getElementById('confirm-page-1').style.display = 'none';
            document.getElementById('rsvp-1').style.display = 'none';
            document.getElementById('confirm-button-1').style.display = 'block';
            rsvpd.push(1)
            pop1.remove()

        }
        else if (eventNum == 2) {
            document.getElementById('startpage').style.display = 'block';
            document.getElementById('confirm-page-2').style.display = 'none';
            document.getElementById('rsvp-2').style.display = 'none';
            document.getElementById('confirm-button-2').style.display = 'block';
            rsvpd.push(2)
            pop2.remove()
        }
        else if (eventNum == 3) {
            document.getElementById('startpage').style.display = 'block';
            document.getElementById('confirm-page-3').style.display = 'none';
            document.getElementById('rsvp-3').style.display = 'none';
            document.getElementById('confirm-button-3').style.display = 'block';
            rsvpd.push(3)
            pop3.remove()
        }
        else if (eventNum == 4) {
            document.getElementById('startpage').style.display = 'block';
            document.getElementById('confirm-page-4').style.display = 'none';
            document.getElementById('rsvp-4').style.display = 'none';
            document.getElementById('confirm-button-4').style.display = 'block';
            rsvpd.push(4)
            pop4.remove()
        }
    },
    submitEvent: function(eventNum, points) {
        if (eventNum == 1) {
            document.getElementById('startpage').style.display = 'block';
            document.getElementById('attendance-pg1').style.display = 'none';
            pop1.remove()
            map.removeLayer('points')
        }
        else if (eventNum == 2) {
            document.getElementById('startpage').style.display = 'block';
            document.getElementById('attendance-pg2').style.display = 'none';
            pop2.remove()
            map.removeLayer('points2')
        }
        else if (eventNum == 3) {
            document.getElementById('startpage').style.display = 'block';
            document.getElementById('attendance-pg3').style.display = 'none';
            pop3.remove()
            map.removeLayer('points3')
        }
        else if (eventNum == 4) {
            document.getElementById('startpage').style.display = 'block';
            document.getElementById('attendance-pg4').style.display = 'none';
            pop4.remove()
            map.removeLayer('points4')
        }
        my_points += points
        document.getElementById('points').innerHTML = my_points
        var popup = document.getElementById("points-popup");
        popup.classList.remove("hide");
        document.getElementById('points-added').innerHTML = "+ ".concat(points, " points added")
        popup.classList.add("show-fast");
    },
    exitPage: function() {
        document.getElementById('attendance-pg1').style.display = 'none';
        document.getElementById('attendance-pg2').style.display = 'none';
        document.getElementById('attendance-pg3').style.display = 'none';
        document.getElementById('attendance-pg4').style.display = 'none';
        document.getElementById('startpage').style.display = 'block';
        pop1.remove()
        pop2.remove()
        pop3.remove()
        pop4.remove()
    },
    cancelEvent: function(eventNum) {
        document.getElementById('confirm-page-1').style.display = 'none';
        document.getElementById('confirm-page-2').style.display = 'none';
        document.getElementById('confirm-page-3').style.display = 'none';
        document.getElementById('confirm-page-4').style.display = 'none';
        document.getElementById('attendance-pg1').style.display = 'none';
        document.getElementById('attendance-pg2').style.display = 'none';
        document.getElementById('attendance-pg3').style.display = 'none';
        document.getElementById('attendance-pg4').style.display = 'none';
        document.getElementById('startpage').style.display = 'block';
        if (eventNum == 1) {
            document.getElementById('rsvp-1').style.display = 'block';
            document.getElementById('confirm-button-1').style.display = 'none';
            pop1.remove()
        }
        else if (eventNum == 2) {
            document.getElementById('rsvp-2').style.display = 'block';
            document.getElementById('confirm-button-2').style.display = 'none';
            pop2.remove()
        }
        else if (eventNum == 3) {
            document.getElementById('rsvp-3').style.display = 'block';
            document.getElementById('confirm-button-3').style.display = 'none';
            pop3.remove()
        }
        else if (eventNum == 4) {
            document.getElementById('rsvp-4').style.display = 'block';
            document.getElementById('confirm-button-4').style.display = 'none';
            pop4.remove()
        }
        rsvpd = rsvpd.filter(e => e != eventNum);
        console.log("NUM", eventNum)
        console.log(rsvpd.filter(e => e != eventNum))
        console.log(rsvpd)
    },
    showLeaderboardPage: function() {
        this.changeActiveTab("leaderboard")
        document.getElementById('leaderboardpage').style.display = 'block'; 
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('startpage').style.display = 'none'; 
        document.getElementById('startpage').style.display = 'none'; 
        document.getElementById('eventspage').style.display = 'none'; 
        document.getElementById('eventspage').style.display = 'none'; 
        document.body.style.backgroundImage = "none";
        // popup.classList.add("show");
    },
    showEventsPage: function() {
        this.changeActiveTab("events-tab")
        document.getElementById('eventspage').style.display = 'block'; 
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('startpage').style.display = 'none'; 
        document.getElementById('startpage').style.display = 'none'; 
        document.getElementById('leaderboardpage').style.display = 'none'; 
        document.getElementById('leaderboardpage').style.display = 'none'; 
        document.body.style.backgroundImage = "none";
        // popup.classList.add("show");
    },
    initializeMap: function() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhbGl1IiwiYSI6ImNqOWdudjNpdDJ6eXoyd3A5MmxxeTV1ZGMifQ.2P9d2RHzp_oDPb1IfasI4g';
        map = new mapboxgl.Map({
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
                                    "description": "<p id='description'><strong>Free Speech in Social Media</strong><br><br>Panel on the impacts and implications of social media on free speech today.<br><br><strong>Location:</strong> 160 Boalt Hall<br><strong>Time:</strong> Wed 10/4, 7-8 PM<br><br><em>Fabiola, Kristine, and 3 other friends are going!</em><div class='left-points'>+ 2 Points</div><div id='rsvp-1' onclick='app.showEventPage(1)'>RSVP</div><div id='confirm-button-1' onclick='app.showAttendance(1)'>Confirm Attendance</div></p>",
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
                                    "description": "<p id='description'><strong>Reply All: Free Speech in the Age of Social Media</strong><br><br>A selection of panels and open discussions with faculty, students and staff addressing the history, practice, and spaces of free speech within the university.<br><br><strong>Location:</strong> Doe Library<br><strong>Time:</strong> Thu 10/5, 9:30 AM - 6:30 PM<br><br><em>Andrea and Fabiola are going!</em><div class='left-points'>+ 3 Points</div><div id='rsvp-2' onclick='app.showEventPage(2)'>RSVP</div><div id='confirm-button-2' onclick='app.showAttendance(2)'>Confirm Attendance</div></p>",
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
                                    "description": "<p id='description'><strong>Free Speech on Campus: A Discussion with Dean Erwin Chemerinsky in Honor of Constitution Day</strong><br><br>In his new book, Free Speech on Campus, written with Howard Gillman, they argue that campuses must provide supportive learning environments for an increasingly diverse student body but at the same time must never restrict the expression of ideas.<br><br>Location: Li Ka Shing 256<br>Time: Tue 10/10, 6-8 PM<br><br><em>Jeffrey is going!</em><div class='center-points'>+ 6 Points</div><div id='rsvp-3' onclick='app.showEventPage(3)'>RSVP</div><div id='confirm-button-3' onclick='app.showAttendance(3)'>Confirm Attendance</div></p>",
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
                                    "description": "<p id='description'><strong>Free Speech Week: A Dialogue on What Makes Trump a Great President</strong><br><br>An open discussion on how Trump has improved our country in the past two years, and what he has in store for America’s future.<br><br>Location: RSF Fieldhouse<br>Time: Thu 10/12, 8-10 PM<div class='right-points'>+ 10 Points</div><div id='rsvp-4' onclick='app.showEventPage(4)'>RSVP</div><div id='confirm-button-4' onclick='app.showAttendance(4)'>Confirm Attendance</div></p>",
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
            pop1 = new mapboxgl.Popup()
                .setLngLat(e.features[0].geometry.coordinates)
                .setHTML(e.features[0].properties.description)
                .addTo(map);
            if (rsvpd.includes(1)) {
                document.getElementById('rsvp-1').style.display = 'none';
                document.getElementById('confirm-button-1').style.display = 'block';
            }
        });
        map.on('click', 'points2', function (e) {
            pop2 = new mapboxgl.Popup()
                .setLngLat(e.features[0].geometry.coordinates)
                .setHTML(e.features[0].properties.description)
                .addTo(map);
            if (rsvpd.includes(2)) {
                document.getElementById('rsvp-2').style.display = 'none';
                document.getElementById('confirm-button-2').style.display = 'block';
            }
        });
        map.on('click', 'points3', function (e) {
            pop3 = new mapboxgl.Popup()
                .setLngLat(e.features[0].geometry.coordinates)
                .setHTML(e.features[0].properties.description)
                .addTo(map);
            if (rsvpd.includes(3)) {
                document.getElementById('rsvp-3').style.display = 'none';
                document.getElementById('confirm-button-3').style.display = 'block';
            }
        });
        map.on('click', 'points4', function (e) {
            pop4 = new mapboxgl.Popup()
                .setLngLat(e.features[0].geometry.coordinates)
                .setHTML(e.features[0].properties.description)
                .addTo(map);
            if (rsvpd.includes(4)) {
                document.getElementById('rsvp-4').style.display = 'none';
                document.getElementById('confirm-button-4').style.display = 'block';
            }
        });
        // map.on('click', 'points2', function (e) {
        //     map.flyTo({center: e.features[0].geometry.coordinates});
        // });
    },
    changeActiveTab: function (id) {
        for (var i = 0; i < tabs.length; i++) {
            if (! (id==tabs[i])) {
                console.log("LOOP:", tabs[i])
                document.getElementById(tabs[i]).classList.remove("active")
            }
        }
        document.getElementById(id).classList.add("active")
        console.log("ACTIVE:", id);

    }
};
