var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    var json = {
        id: "node01",
        name: "人和",
        data: {},
        children: [{
                id: "node011",
                name: "锡风",
                data: {},
                children: []
            },{
                id: "node012",
                name: "锡去",
                data: {},
                children: []
            },{
                id: "node013",
                name: "锡琼",
                data: {},
                children: []
            },{
                id: "node014",
                name: "锡行",
                data: {},
                children: []
            },{
                id: "node015",
                name: "锡瓒",
                data: {},
                children: [{
            id: "node13",
            name: "作成",
            data: {},
            children: [{
                id: "node24",
                name: "应勇(亚生)",
                data: {},
                children: []
            }, {
                id: "node222",
                name: "应超",
                data: {},
                children: [{
                    id: "node323",
                    name: "李英(湴土)",
                    data: {},
                    children: [{
                        id: "node424",
                        name: "开放(木林)",
                        data: {},
                        children: []
                    },{
                        id: "node425",
                        name: "开郁",
                        data: {},
                        children: []
                    }]
                },{
                    id: "node324",
                    name: "二英(木金)",
                    data: {},
                    children: [{
                        id: "node4245",
                        name: "土源",
                        data: {},
                        children: []
                    },{
                        id: "node4246",
                        name: "土锋",
                        data: {},
                        children: []
                    }]
                }]
            },{
                id: "node223",
                name: "应毅(水旺)",
                data: {},
                children: [{
                    id: "node3231",
                    name: "炎英(炎寿)",
                    data: {},
                    children: []
                },{
                    id: "node3232",
                    name: "作英(海英)",
                    data: {},
                    children: []
                }]
            }]
        }, {
            id: "node125",
            name: "信成",
            data: {},
            children: [{
                id: "node226",
                name: "应就(水生)",
                data: {},
                children: [{
                    id: "node327",
                    name: "盛英(志武)",
                    data: {},
                    children: [{
                        id: "node428",
                        name: "杰棋",
                        data: {},
                        children: []
                    }, {
                        id: "node429",
                        name: "杰铭",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node330",
                    name: "就英(志聪)",
                    data: {},
                    children: [{
                        id: "node431",
                        name: "增锋",
                        data: {},
                        children: []
                    },{
                        id: "node432",
                        name: "桂铭",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }, {
            id: "node165",
            name: "昌成",
            data: {},
            children: [{
                id: "node266",
                name: "就海(金生)",
                data: {},
                children: [{
                    id: "node367",
                    name: "祥英(张为)",
                    data: {},
                    children: []
                }]
            }]
        }]
            }
        ]
    }
    var json2 = {
        id: "node02",
        name: "锡瓒",
        data: {},
        children: [{
            id: "node13",
            name: "作成",
            data: {},
            children: [{
                id: "node24",
                name: "应勇(亚生)",
                data: {},
                children: []
            }, {
                id: "node222",
                name: "应超",
                data: {},
                children: [{
                    id: "node323",
                    name: "李英(湴土)",
                    data: {},
                    children: [{
                        id: "node424",
                        name: "开放(木林)",
                        data: {},
                        children: []
                    },{
                        id: "node425",
                        name: "开郁",
                        data: {},
                        children: []
                    }]
                },{
                    id: "node324",
                    name: "二英(木金)",
                    data: {},
                    children: [{
                        id: "node4245",
                        name: "土源",
                        data: {},
                        children: []
                    },{
                        id: "node4246",
                        name: "土锋",
                        data: {},
                        children: []
                    }]
                }]
            },{
                id: "node223",
                name: "应毅(水旺)",
                data: {},
                children: [{
                    id: "node3231",
                    name: "炎英(炎寿)",
                    data: {},
                    children: []
                },{
                    id: "node3232",
                    name: "作英(海英)",
                    data: {},
                    children: []
                }]
            }]
        }, {
            id: "node125",
            name: "信成",
            data: {},
            children: [{
                id: "node226",
                name: "应就(水生)",
                data: {},
                children: [{
                    id: "node327",
                    name: "盛英(志武)",
                    data: {},
                    children: [{
                        id: "node428",
                        name: "杰棋",
                        data: {},
                        children: []
                    }, {
                        id: "node429",
                        name: "杰铭",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node330",
                    name: "就英(志聪)",
                    data: {},
                    children: [{
                        id: "node431",
                        name: "增锋",
                        data: {},
                        children: []
                    },{
                        id: "node432",
                        name: "桂铭",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }, {
            id: "node165",
            name: "昌成",
            data: {},
            children: [{
                id: "node266",
                name: "就海(金生)",
                data: {},
                children: [{
                    id: "node367",
                    name: "祥英(张为)",
                    data: {},
                    children: []
                }]
            }]
        }]
    };
    //end
    //init Spacetree
    //Create a new ST instance
    var st = new $jit.ST({
        //id of viz container element
        injectInto: 'infovis',
        //set duration for the animation
        duration: 800,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 50,
        //enable panning
        Navigation: {
          enable:true,
          panning:true
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            height: 20,
            width: 60,
            type: 'rectangle',
            color: '#aaa',
            overridable: true
        },
        
        Edge: {
            type: 'bezier',
            overridable: true
        },
        
        onBeforeCompute: function(node){
            Log.write("loading " + node.name);
        },
        
        onAfterCompute: function(){
            Log.write("done");
        },
        
        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function(label, node){
            label.id = node.id;            
            label.innerHTML = node.name;
            label.onclick = function(){
            	if(normal.checked) {
            	  st.onClick(node.id);
            	} else {
                st.setRoot(node.id, 'animate');
            	}
            };
            //set label styles
            var style = label.style;
            style.width = 60 + 'px';
            style.height = 17 + 'px';            
            style.cursor = 'pointer';
            style.color = '#333';
            style.fontSize = '0.8em';
            style.textAlign= 'center';
            style.paddingTop = '3px';
        },
        
        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function(node){
            //add some color to the nodes in the path between the
            //root node and the selected node.
            if (node.selected) {
                node.data.$color = "#ff7";
            }
            else {
                delete node.data.$color;
                //if the node belongs to the last plotted level
                if(!node.anySubnode("exist")) {
                    //count children number
                    var count = 0;
                    node.eachSubnode(function(n) { count++; });
                    //assign a node color based on
                    //how many children it has
                    node.data.$color = ['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa'][count];                    
                }
            }
        },
        
        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function(adj){
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#eed";
                adj.data.$lineWidth = 3;
            }
            else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }
        }
    });
    //load json data
    st.loadJSON(json);
    //compute node positions and layout
    st.compute();
    //optional: make a translation of the tree
    st.geom.translate(new $jit.Complex(-200, 0), "current");
    //emulate a click on the root node.
    st.onClick(st.root);
    //end
    //Add event handlers to switch spacetree orientation.
    var top = $jit.id('r-top'), 
        left = $jit.id('r-left'), 
        bottom = $jit.id('r-bottom'), 
        right = $jit.id('r-right'),
        normal = $jit.id('s-normal');
        
    
    function changeHandler() {
        if(this.checked) {
            top.disabled = bottom.disabled = right.disabled = left.disabled = true;
            st.switchPosition(this.value, "animate", {
                onComplete: function(){
                    top.disabled = bottom.disabled = right.disabled = left.disabled = false;
                }
            });
        }
    };
    
    top.onchange = left.onchange = bottom.onchange = right.onchange = changeHandler;
    //end

}
