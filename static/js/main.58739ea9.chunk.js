(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o,n,s,r=a(0),i=a.n(r),c=a(7),p=a.n(c),h=(a(17),a(18),a(6)),d=a(1),l=a(2),u=a(4),m=a(3),v=a(5),N=(a(19),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).toggle_play=function(){a.setState({playing:!a.state.playing}),a.props.togglePlaySynth()},a.state={playing:!1},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.createElement("div",{onClick:this.toggle_play,className:"Play "+(this.state.playing?"Playing":"Paused")})}}]),t}(r.Component));a(20);!function(e){e[e.Up=0]="Up",e[e.Down=1]="Down"}(o||(o={})),function(e){e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.UpDown=2]="UpDown"}(n||(n={})),function(e){e[e.Black=0]="Black",e[e.White=1]="White"}(s||(s={}));var g=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).cycle_mode=function(){switch(a.state.mode){case n.Up:a.setState({mode:n.Down}),a.props.setMode(n.Down);break;case n.Down:a.setState({mode:n.UpDown}),a.props.setMode(n.UpDown);break;case n.UpDown:a.setState({mode:n.Up}),a.props.setMode(n.Up)}},a.state={mode:n.UpDown},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Mode_Container"},i.a.createElement("p",null,"Mode:"),i.a.createElement("div",{onClick:this.cycle_mode,className:"mode "+this.state.mode},i.a.createElement("img",{src:"/arpeggio/images/"+this.state.mode+".svg"})))}}]),t}(i.a.Component),f=(a(21),function(e){function t(){var e,a;Object(d.a)(this,t);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).toggleActive=function(){a.props.active?a.props.removeNote(a.props.noteNumber):a.props.addNote(a.props.noteNumber)},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.type===s.Black?"Black":this.props.type===s.White?"White":"",t=(this.props.active?"active ":"")+e+" Key "+this.props.noteNumber;return i.a.createElement("div",{onClick:this.toggleActive,className:t})}}]),t}(i.a.Component)),b=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Octave"},i.a.createElement(f,{type:s.White,active:this.props.activeNotes.includes(12*this.props.range+0),noteNumber:12*this.props.range+0,addNote:this.props.addNote,removeNote:this.props.removeNote}),i.a.createElement(f,{type:s.Black,active:this.props.activeNotes.includes(12*this.props.range+1),noteNumber:12*this.props.range+1,addNote:this.props.addNote,removeNote:this.props.removeNote}),i.a.createElement(f,{type:s.White,active:this.props.activeNotes.includes(12*this.props.range+2),noteNumber:12*this.props.range+2,addNote:this.props.addNote,removeNote:this.props.removeNote}),i.a.createElement(f,{type:s.Black,active:this.props.activeNotes.includes(12*this.props.range+3),noteNumber:12*this.props.range+3,addNote:this.props.addNote,removeNote:this.props.removeNote}),i.a.createElement(f,{type:s.White,active:this.props.activeNotes.includes(12*this.props.range+4),noteNumber:12*this.props.range+4,addNote:this.props.addNote,removeNote:this.props.removeNote}),i.a.createElement(f,{type:s.White,active:this.props.activeNotes.includes(12*this.props.range+5),noteNumber:12*this.props.range+5,addNote:this.props.addNote,removeNote:this.props.removeNote}),i.a.createElement(f,{type:s.Black,active:this.props.activeNotes.includes(12*this.props.range+6),noteNumber:12*this.props.range+6,addNote:this.props.addNote,removeNote:this.props.removeNote}),i.a.createElement(f,{type:s.White,active:this.props.activeNotes.includes(12*this.props.range+7),noteNumber:12*this.props.range+7,addNote:this.props.addNote,removeNote:this.props.removeNote}),i.a.createElement(f,{type:s.Black,active:this.props.activeNotes.includes(12*this.props.range+8),noteNumber:12*this.props.range+8,addNote:this.props.addNote,removeNote:this.props.removeNote}),i.a.createElement(f,{type:s.White,active:this.props.activeNotes.includes(12*this.props.range+9),noteNumber:12*this.props.range+9,addNote:this.props.addNote,removeNote:this.props.removeNote}),i.a.createElement(f,{type:s.Black,active:this.props.activeNotes.includes(12*this.props.range+10),noteNumber:12*this.props.range+10,addNote:this.props.addNote,removeNote:this.props.removeNote}),i.a.createElement(f,{type:s.White,active:this.props.activeNotes.includes(12*this.props.range+11),noteNumber:12*this.props.range+11,addNote:this.props.addNote,removeNote:this.props.removeNote}))}}]),t}(i.a.Component),y=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Keyboard"},i.a.createElement(b,Object.assign({},this.props,{range:2})),i.a.createElement(b,Object.assign({},this.props,{range:3})),i.a.createElement(b,Object.assign({},this.props,{range:4})),i.a.createElement(b,Object.assign({},this.props,{range:5})),i.a.createElement(b,Object.assign({},this.props,{range:6})))}}]),t}(i.a.Component),E=(a(22),a(9)),O=a.n(E),j=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).On_Drag=function(e,t){var o=100-t.y/1.5,n=Math.round(a.props.min+o/100*(a.props.max-a.props.min));a.setState({value:n}),a.props.func&&a.props.func(n)},a.state={value:a.props.default},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Control"},i.a.createElement("div",{className:"Name"},this.props.name),i.a.createElement("div",{className:"Value"},this.state.value," ",i.a.createElement("span",{className:"Units"},this.props.units)," "),i.a.createElement("div",{className:"Axis"},i.a.createElement(O.a,{onDrag:this.On_Drag,bounds:{top:0,bottom:150},defaultPosition:{x:0,y:150-Math.round(this.props.default/this.props.max*150)},axis:"y"},i.a.createElement("div",{className:"Bar"}))))}}]),t}(i.a.Component),C=(a(23),function(e){var t=e%12,a="";return 0==t?a="C":1==t?a="C#":2==t?a="D":3==t?a="D#":4==t?a="E":5==t?a="F":6==t?a="F#":7==t?a="G":8==t?a="G#":9==t?a="A":10==t?a="A#":11==t&&(a="B"),a+Math.floor(e/12)}),w=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onTextInputChange=function(e){a.setState({value:e.target.value})},a.addChord=function(){var e=a.state.value;""==e&&(e=a.props.activeNotes.map(function(e){return C(e)}).toString()),a.props.saveChord(e+" ")},a.state={value:""},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.chords.map(function(t,a){return i.a.createElement(k,{key:a,loadChord:e.props.loadChord,chord:t})});return i.a.createElement("div",{className:"Chords"},i.a.createElement("span",null,"Chords:"),i.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onTextInputChange}),i.a.createElement("div",{onClick:this.addChord,className:"add_button"},"add"),i.a.createElement("div",{onClick:this.props.deleteChord,className:"delete_button"},"delete"),i.a.createElement("div",{className:"chord_container"},t))}}]),t}(i.a.Component),k=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{onClick:function(){return e.props.loadChord(e.props.chord.notes)},className:"chord"},this.props.chord.name)}}]),t}(i.a.Component),D=(a(24),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).addNote=function(e){var t=a.state.activeNotes;t.push(e),t.sort(),a.setState({activeNotes:t}),a.props.Audio_Manager.setNotes(t)},a.removeNote=function(e){var t=a.state.activeNotes.filter(function(t){return t!=e});a.setState({activeNotes:t}),a.props.Audio_Manager.setNotes(t)},a.saveChord=function(e){var t=Object(h.a)(a.state.chords);t.push({name:e,notes:Object(h.a)(a.state.activeNotes)}),a.setState({chords:t})},a.loadChord=function(e){a.setState({activeNotes:Object(h.a)(e)}),a.props.Audio_Manager.setNotes(e)},a.deleteChord=function(){var e=a.state.chords;e.pop(),a.setState({chords:e})},a.state={activeNotes:[],chords:[{name:"C min",notes:[36,39,43,48,51]},{name:"Bb maj",notes:[34,38,41,46,50]},{name:"G maj",notes:[32,36,39,44,48]}]},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"Arpeggio"},i.a.createElement("div",{className:"Header"},i.a.createElement("img",{className:"Logo",src:"/arpeggio/images/keyboard.svg"}),i.a.createElement(N,{togglePlaySynth:this.props.Audio_Manager.togglePlaySynth}),i.a.createElement(g,{setMode:this.props.Audio_Manager.setMode})),i.a.createElement("div",{className:"Content"},i.a.createElement(y,{activeNotes:this.state.activeNotes,addNote:this.addNote,removeNote:this.removeNote}),i.a.createElement(w,{activeNotes:this.state.activeNotes,chords:this.state.chords,saveChord:this.saveChord,loadChord:this.loadChord,deleteChord:this.deleteChord}),i.a.createElement("div",{className:"Control_Bar"},i.a.createElement(j,{name:"Speed",default:160,min:20,max:200,units:"bpm",func:this.props.Audio_Manager.setBpm}),i.a.createElement(j,{name:"Decay",default:750,min:50,max:5e3,units:"ms",func:this.props.Audio_Manager.setDecay}),i.a.createElement(j,{name:"Tone",default:1500,min:10,max:2e3,units:"hz",func:this.props.Audio_Manager.set_cutoff}))))}}]),t}(i.a.Component)),x=function e(t){var a=this;Object(d.a)(this,e),this.filter=void 0,this.synth=void 0,this.noteIndex=void 0,this.direction=void 0,this.mode=void 0,this.notes=void 0,this.tone=void 0,this.togglePlaySynth=function(){a.tone.Transport.toggle(0)},this.setBpm=function(e){a.tone.Transport.bpm.value=80+4*e},this.triggerSynth=function(e){if(a.notes.length>0){switch(a.mode){case n.Up:a.noteIndex++,a.noteIndex>=a.notes.length&&(a.noteIndex=0);break;case n.Down:a.noteIndex--,a.noteIndex<0&&(a.noteIndex=a.notes.length-1);break;case n.UpDown:a.direction===o.Up?a.noteIndex++:a.noteIndex--,a.noteIndex>=a.notes.length-1&&(a.direction=o.Down),a.noteIndex<=0&&(a.direction=o.Up)}var t=a.notes[a.noteIndex],s=document.getElementsByClassName(t.toString())[0];s&&s.classList.add("playing"),setTimeout(function(){s&&s.classList.remove("playing")},100);var r=C(t);r&&a.synth.triggerAttackRelease(r,.01,e)}},this.set_cutoff=function(e){a.filter.frequency.value=e},this.setDecay=function(e){var t=e/1e3;a.synth.voices.forEach(function(e){e.envelope.release=t})},this.setMode=function(e){a.mode=e},this.setNotes=function(e){a.notes=e},this.tone=t;var s=new t.Volume(-9),r=new t.Volume(-3),i=new t.Limiter(-3).connect(t.Master);this.filter=new t.Filter(2e3,"lowpass"),this.filter.Q.value=6,this.synth=new t.PolySynth(8,t.Synth).chain(s,this.filter,r,i),this.synth.voices.forEach(function(e){e.envelope.release=.75,e.envelope.sustain=1}),this.tone.Transport.schedule(this.triggerSynth,0),this.tone.Transport.loopEnd="4n",this.tone.Transport.loop=!0,this.tone.Transport.bpm.value=720,this.notes=[],this.noteIndex=0,this.mode=n.UpDown,this.direction=o.Up},M=a(10),S=a.n(M);var _=function(){var e=new x(S.a);return i.a.createElement("div",{className:"App"},i.a.createElement(D,{Audio_Manager:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.58739ea9.chunk.js.map