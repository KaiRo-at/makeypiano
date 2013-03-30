/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

var gSounds = {};

window.onload = function() {
  // Create objects, makes sure that all the audio gets loaded.
  gSounds.c1 = new Audio("sound/piano_c1.opus");
  gSounds.d1 = new Audio("sound/piano_d1.opus");
  gSounds.e1 = new Audio("sound/piano_e1.opus");
  gSounds.f1 = new Audio("sound/piano_f1.opus");
  gSounds.g1 = new Audio("sound/piano_g1.opus");
  gSounds.a1 = new Audio("sound/piano_a1.opus");
  gSounds.b1 = new Audio("sound/piano_b1.opus");
  gSounds.c2 = new Audio("sound/piano_c2.opus");

  document.getElementById("body").addEventListener("keydown", eventHandler, false);
}

var eventHandler = {
  handleEvent: function(aEvent) {
    switch (aEvent.type) {
      case "keydown":
        // Should use aEvent.key instead of aEvent.which but needs bug 680830.
        // See https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/keydown
        switch (aEvent.which) {
          case 32: // space
            gPitches.play("c1");
          break;
          case 39: // right
            gPitches.play("d1");
          break;
          case 38: // up
            gPitches.play("e1");
          break;
          case 37: // left
            gPitches.play("f1");
          break;
          case 40: // down
            gPitches.play("g1");
          break;
          case 87: // w
            gPitches.play("a1");
          break;
          case 65: // a
            gPitches.play("b1");
          break;
          case 83: // s
            gPitches.play("c2");
          break;
          default: // not supported
            console.log("key not supported: " + aEvent.which);
          break;
        }
    }
  }
};

var gPitches = {
  play: function(aPitchName) {
    gPitches.flash(aPitchName);
    var pitchSound = new Audio(gSounds[aPitchName].src);
    pitchSound.play();
  },

  flash: function(aPitchName) {
    document.getElementById(aPitchName + "-upper").classList.add("active");
    document.getElementById(aPitchName + "-lower").classList.add("active");
    setTimeout(gPitches.unflash, 200, aPitchName);
  },

  unflash: function(aPitchName) {
    document.getElementById(aPitchName + "-upper").classList.remove("active");
    document.getElementById(aPitchName + "-lower").classList.remove("active");
  }
};

function toggleHelp() {
  document.getElementById("helpdesc").classList.toggle("hidden");
}
