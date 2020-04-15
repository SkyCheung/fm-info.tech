var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
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
    var json = {"id":"1","pid":"0","name":"\u671d\u795e","alias_name":"","gid":"-3","children":[{"id":"2","pid":"1","name":"\u65e5\u661f","alias_name":"","gid":"-2","children":[{"id":"5","pid":"2","name":"\u82cd\u663e","alias_name":"","gid":"-1","children":[]},{"id":"6","pid":"2","name":"\u82cd\u5bcc","alias_name":"","gid":"-1","children":[]}]},{"id":"3","pid":"1","name":"\u65e5\u5149","alias_name":"","gid":"-2","children":[{"id":"7","pid":"3","name":"\u82cd\u6210","alias_name":"","gid":"-1","children":[]}]},{"id":"4","pid":"1","name":"\u65e5\u798f","alias_name":"","gid":"2","children":[{"id":"8","pid":"4","name":"\u82cd\u4f51","alias_name":"","gid":"-1","children":[{"id":"9","pid":"8","name":"\u6d1e\u6d2a","alias_name":"","gid":"0","children":[{"id":"10","pid":"9","name":"\u5fb7\u6da6","alias_name":"","gid":"1","children":[{"id":"11","pid":"10","name":"\u6b63\u4e61","alias_name":"","gid":"2","children":[]},{"id":"12","pid":"10","name":"\u5e7f\u5b5a","alias_name":"","gid":"2","children":[{"id":"14","pid":"12","name":"\u4ef2\u793c","alias_name":"","gid":"3","children":[{"id":"16","pid":"14","name":"\u8d44","alias_name":"","gid":"4","children":[{"id":"22","pid":"16","name":"\u5eb7\u6108","alias_name":"","gid":"5","children":[]},{"id":"21","pid":"16","name":"\u8302","alias_name":"","gid":"5","children":[]},{"id":"20","pid":"16","name":"\u961c","alias_name":"","gid":"5","children":[{"id":"23","pid":"20","name":"\u5eb7\u53ec","alias_name":"","gid":"6","children":[{"id":"24","pid":"23","name":"\u632f","alias_name":"","gid":"7","children":[{"id":"28","pid":"24","name":"\u9053\u5347","alias_name":"","gid":"8","children":[]},{"id":"27","pid":"24","name":"\u9053\u5fb7","alias_name":"","gid":"8","children":[{"id":"29","pid":"27","name":"\u524d\u77f3","alias_name":"","gid":"9","children":[{"id":"30","pid":"29","name":"\u4e91\u5b63","alias_name":"","gid":"10","children":[]},{"id":"31","pid":"29","name":"\u4e91\u96c4","alias_name":"","gid":"10","children":[{"id":"33","pid":"31","name":"\u5ef7\u534e","alias_name":"","gid":"11","children":[{"id":"34","pid":"33","name":"\u5347","alias_name":"","gid":"12","children":[{"id":"35","pid":"34","name":"\u4e66\u7235","alias_name":"","gid":"13","children":[{"id":"36","pid":"35","name":"\u671d\u658c","alias_name":"","gid":"14","children":[]},{"id":"37","pid":"35","name":"\u671d\u73ba","alias_name":"","gid":"14","children":[{"id":"45","pid":"37","name":"\u74d2\u53d7","alias_name":"","gid":"15","children":[{"id":"44","pid":"45","name":"\u6587\u8302","alias_name":"","gid":"16","children":[{"id":"46","pid":"44","name":"\u745e\u8d85","alias_name":"","gid":"17","children":[{"id":"51","pid":"46","name":"\u4eba\u534e","alias_name":"","gid":"18","children":[]},{"id":"50","pid":"46","name":"\u4eba\u539a","alias_name":"","gid":"18","children":[]},{"id":"49","pid":"46","name":"\u4eba\u548c","alias_name":"","gid":"18","children":[{"id":"52","pid":"49","name":"\u9521\u98ce","alias_name":"","gid":"19","children":[]},{"id":"53","pid":"49","name":"\u9521\u53bb","alias_name":"","gid":"19","children":[]},{"id":"54","pid":"49","name":"\u9521\u743c","alias_name":"","gid":"19","children":[]},{"id":"55","pid":"49","name":"\u9521\u884c","alias_name":"","gid":"19","children":[]},{"id":"56","pid":"49","name":"\u9521\u74d2","alias_name":"","gid":"19","children":[{"id":"59","pid":"56","name":"\u660c\u6210","alias_name":"","gid":"20","children":[]},{"id":"58","pid":"56","name":"\u4fe1\u6210","alias_name":"","gid":"20","children":[{"id":"60","pid":"58","name":"\u5e94\u5c31","alias_name":"\u6c34\u751f","gid":"21","children":[{"id":"61","pid":"60","name":"\u76db\u82f1","alias_name":"\u5fd7\u6b66","gid":"22","children":[{"id":"63","pid":"61","name":"\u6770\u68cb","alias_name":"","gid":"23","children":[]},{"id":"64","pid":"61","name":"\u6770\u94ed","alias_name":"","gid":"23","children":[]}]},{"id":"62","pid":"60","name":"\u5c31\u82f1","alias_name":"\u5fd7\u806a","gid":"22","children":[{"id":"65","pid":"62","name":"\u589e\u950b","alias_name":"","gid":"23","children":[]},{"id":"66","pid":"62","name":"\u6842\u94ed","alias_name":"","gid":"23","children":[]}]}]}]},{"id":"57","pid":"56","name":"\u4f5c\u6210","alias_name":"","gid":"20","children":[]}]}]},{"id":"48","pid":"46","name":"\u4eba\u5112","alias_name":"","gid":"18","children":[]},{"id":"47","pid":"46","name":"\u4eba\u5112","alias_name":"","gid":"18","children":[]}]}]},{"id":"43","pid":"45","name":"\u6587\u6bd3","alias_name":"","gid":"16","children":[]},{"id":"42","pid":"45","name":"\u6587\u658c","alias_name":"","gid":"16","children":[]},{"id":"41","pid":"45","name":"\u6587\u5f69","alias_name":"","gid":"16","children":[]}]}]},{"id":"38","pid":"35","name":"\u671d\u9009","alias_name":"","gid":"14","children":[]},{"id":"39","pid":"35","name":"\u671d\u7389","alias_name":"","gid":"14","children":[]},{"id":"40","pid":"35","name":"\u671d\u5f66","alias_name":"","gid":"14","children":[]}]}]}]}]},{"id":"32","pid":"29","name":"\u4e91\u6770","alias_name":"","gid":"10","children":[]}]}]},{"id":"26","pid":"24","name":"\u9053\u96c4","alias_name":"","gid":"8","children":[]},{"id":"25","pid":"24","name":"\u9053\u79c0","alias_name":"","gid":"8","children":[]}]}]}]},{"id":"19","pid":"16","name":"\u5b63","alias_name":"","gid":"5","children":[]}]},{"id":"15","pid":"14","name":"\u5168","alias_name":"","gid":"4","children":[{"id":"17","pid":"15","name":"\u5112","alias_name":"","gid":"5","children":[{"id":"18","pid":"17","name":"\u60e0","alias_name":"","gid":"6","children":[]}]}]}]}]},{"id":"13","pid":"10","name":"\u540d\u663e","alias_name":"","gid":"2","children":[]}]}]}]}]}]};
    //end
    //init Spacetree
    //Create a new ST instance
    var st = new $jit.ST({
        orientation: 'left',  
        //id of viz container element
        injectInto: 'infovis',
        //set duration for the animation
        duration: 800,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 50,
        
        constrained:true,
        //The number of levels to show for a subtree
        levelsToShow:5,

        //enable panning
        Navigation: {
          enable:true,
          panning:true
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            height: 25,
            width: 80,
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
            style.width = 80 + 'px';
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
