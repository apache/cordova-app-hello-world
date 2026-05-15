/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Put plugin-dependent code here.
    const runtimeInfo = `cordova-${cordova.platformId}@${cordova.version}`;
    console.log(`Running ${runtimeInfo}`);
    // Set the status text to show the Cordova runtime is ready, and include
    // platform and version info.
    const statusTextElement = document.getElementById('statusText');
    statusTextElement.innerHTML = `Device is ready:<br>${runtimeInfo}`;
    // Add a CSS class to apply styles indicating the app is ready.
    statusTextElement.classList.add('ready');
}
