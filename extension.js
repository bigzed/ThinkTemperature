
const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;

let status_icon;

SystemTemperature.prototype = {
  __proto__: PanelMenu.SystemStatusButton.prototype,

  __init: function() {

  }
}

function init() {
    status_icon = new SystemTemperature();
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}
