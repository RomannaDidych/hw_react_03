(this.webpackJsonphw_react_03=this.webpackJsonphw_react_03||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(1),c=n.n(r),a=n(3),o=n.n(a),s=(n(13),n(14),n(4)),u=n(5),m=n(7),l=n(6),h=(n(15),function(t){Object(m.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={timing:t.props.timer.autostart,time:t.props.timer.time},t.componentDidMount=function(){t.timerID=setInterval((function(){return t.tick()}),t.props.timer.timeTick)},t.tick=function(){var e=t.state.time;!0===t.state.timing&&(0!==e?t.setState({time:e-t.props.timer.timeTick}):t.setState({timing:!1,time:t.props.timer.time}))},t.showButtonState=function(){return!0===t.state.timing?"stop":"start"},t.createTimeString=function(t){var e=function(t){return t<10?"0"+t:"i"},n=e(t%1e3),i=e(Math.floor(t/1e3));return e(Math.floor(t/6e4))+":"+i+":"+n},t.handleClick=function(e){console.log("click"),t.state.timing?t.setState({timing:!1}):t.setState({timing:!0})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"timer",children:[Object(i.jsx)("div",{className:"timerBlock",children:Object(i.jsx)("p",{children:this.createTimeString(this.state.time)})}),Object(i.jsx)("button",{className:"startButton",onClick:this.handleClick,children:this.showButtonState()})]})}}]),n}(r.Component));var p=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(h,{timer:{time:5e3,timeTick:1e3,autostart:!1}})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),r(t),c(t),a(t)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.b6270680.chunk.js.map