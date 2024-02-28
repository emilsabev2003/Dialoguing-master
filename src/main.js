// Emil Sabev
// 2/28/2024
// Dialogging
// Visual novel "teletext-style" dialog example that reads from a JSON file
// Based on a dialog system implemented by UCSC student Tina Peng

// TO-DO: integrate the end-of-line fix from ourcade: https://blog.ourcade.co/posts/2020/phaser-3-typewriter-text-effect-bitmap/

// BE STRIK
"use strict"

// game config
let config = 
{
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Title, Talking ]
}

const game = new Phaser.Game(config)

// globals
const centerX = game.config.width / 2
const centerY = game.config.height / 2
let cursors = null