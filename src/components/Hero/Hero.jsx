"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
require("./Hero.css");
var React = require("react");
var ContactMethods_1 = require("../ContactMethods/ContactMethods");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.resumeButton = function () {
        return (<a className='hero__resume-button' href="https://s3-us-west-2.amazonaws.com/kyleboss.com/KyleBossResume.pdf">
            Résumé
        </a>);
    };
    Hero.prototype.render = function () {
        return (<div className='hero'>
                <div className="hero__background"/>
                {this.resumeButton()}
                <div className='hero__main-text-container'>
                    <div className="hero__main-text">Hello, I am</div>
                    <div className="hero__main-text hero__main-text--emphasized">Kyle Boss</div>
                    <div className='hero__main-text hero__main-text--subtitle'>
                        <div className="tablet-and-desktop-only">
                            Positive, energetic, & socially-aware software engineer
                        </div>
                        <div className="mobile-only">Energetic software engineer</div>
                    </div>
                </div>
                <ContactMethods_1.default />
            </div>);
    };
    return Hero;
}(React.Component));
exports["default"] = Hero;
