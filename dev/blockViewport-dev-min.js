"use strict";/*! 
//
//	blockViewport.js
// 	Block different viewports 
// 	Version 0.1 12/04/18
// 	Created by Vinzenz Aubry for sansho (04/12/17)
// 	@license MIT Licensed
//
*/
function BlockViewport(t){this.settings=t,this.inject(),this.addEventListeners(),this.resize()}BlockViewport.prototype.inject=function(){for(var t=0;t<this.settings.length;t++){var e=this.settings[t],i={};i.color=e.color||"#000000",i.fontColor=e.fontColor||"#FFFFFF",i.text=e.text||"This viewport is blocked. Please change your browser size",i.widthStart=e.widthStart||0,i.widthEnd=e.widthEnd||9999;var n=this.generateHTML(i);this.appendHtml(document.body,n)}},BlockViewport.prototype.generateHTML=function(t){return'<div class="blockViewport" data-start="'+t.widthStart+'" data-end="'+t.widthEnd+'" style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color:'+t.color+'; display: flex; align-items: center; justify-content: center;"><p style="font-size: 2rem; color: '+t.fontColor+'; line-height: 1.6 height: auto; text-align: center; width: 75vw; margin-bottom: 5vh;">'+t.text+"</p></div>"},BlockViewport.prototype.addEventListeners=function(){this.resizeEvent=this.resize.bind(this),window.addEventListener("resize",this.resizeEvent)},BlockViewport.prototype.resize=function(){for(var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,e=document.getElementsByClassName("blockViewport"),i=0;i<e.length;i++){var n=parseInt(e[i].dataset.start),o=parseInt(e[i].dataset.end);e[i].style.display=t>=n&&t<=o?"flex":"none"}},BlockViewport.prototype.appendHtml=function(t,e){var i=document.createElement("div");for(i.innerHTML=e;i.children.length>0;)t.appendChild(i.children[0])};