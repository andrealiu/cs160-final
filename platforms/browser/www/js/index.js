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

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    showStartPage: function() {
        document.getElementById('startpage').style.display = 'block'; 
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('homepage').style.display = 'none';
        app.initializeMap()
        document.body.style.backgroundImage = "none";
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
