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
    var json={"id":"1","name":"\u671d\u795e","pid":"0","gid":"-3","children":[{"id":"2","name":"\u65e5\u661f","pid":"1","gid":"-2","children":[{"id":"5","name":"\u82cd\u663e","pid":"2","gid":"-1","children":[]},{"id":"6","name":"\u82cd\u5bcc","pid":"2","gid":"-1","children":[]}]},{"id":"3","name":"\u65e5\u5149","pid":"1","gid":"-2","children":[{"id":"7","name":"\u82cd\u6210","pid":"3","gid":"-1","children":[]}]},{"id":"4","name":"\u65e5\u798f","pid":"1","gid":"-2","children":[{"id":"8","name":"\u82cd\u4f51","pid":"4","gid":"-1","children":[{"id":"9","name":"\u6d1e\u6d2a","pid":"8","gid":"0","children":[{"id":"10","name":"\u5fb7\u6da6","pid":"9","gid":"1","children":[{"id":"11","name":"\u6b63\u4e61","pid":"10","gid":"2","children":[]},{"id":"12","name":"\u5e7f\u5b5a","pid":"10","gid":"2","children":[{"id":"14","name":"\u4ef2\u793c","pid":"12","gid":"3","children":[{"id":"15","name":"\u5168","pid":"14","gid":"4","children":[{"id":"17","name":"\u5112","pid":"15","gid":"5","children":[{"id":"18","name":"\u60e0","pid":"17","gid":"6","children":[]}]}]},{"id":"16","name":"\u8d44","pid":"14","gid":"4","children":[{"id":"19","name":"\u5b63","pid":"16","gid":"5","children":[]},{"id":"20","name":"\u961c","pid":"16","gid":"5","children":[{"id":"23","name":"\u5eb7\u53ec","pid":"20","gid":"6","children":[{"id":"24","name":"\u632f","pid":"23","gid":"7","children":[{"id":"25","name":"\u9053\u79c0","pid":"24","gid":"8","children":[]},{"id":"26","name":"\u9053\u96c4","pid":"24","gid":"8","children":[{"id":"116","name":"\u5434\u77f3(\u91d1\u7389\u5802\u7956)","pid":"26","gid":"9","children":[]},{"id":"117","name":"\u745e\u77f3","pid":"26","gid":"9","children":[]}]},{"id":"27","name":"\u9053\u5fb7","pid":"24","gid":"8","children":[{"id":"29","name":"\u524d\u77f3","pid":"27","gid":"9","children":[{"id":"30","name":"\u4e91\u5b63","pid":"29","gid":"10","children":[]},{"id":"31","name":"\u4e91\u96c4","pid":"29","gid":"10","children":[{"id":"33","name":"\u5ef7\u534e","pid":"31","gid":"11","children":[{"id":"34","name":"\u5347","pid":"33","gid":"12","children":[{"id":"35","name":"\u4e66\u7235","pid":"34","gid":"13","children":[{"id":"36","name":"\u671d\u658c","pid":"35","gid":"14","children":[]},{"id":"37","name":"\u671d\u73ba","pid":"35","gid":"14","children":[{"id":"45","name":"\u74d2\u53d7","pid":"37","gid":"15","children":[{"id":"41","name":"\u6587\u5f69(\u658b\u5802\u5761\u5206\u652f\u7956\uff09","pid":"45","gid":"16","children":[{"id":"118","name":"\u745e\u8363","pid":"41","gid":"17","children":[]},{"id":"119","name":"\u745e\u534e","pid":"41","gid":"17","children":[]},{"id":"120","name":"\u745e\u6797","pid":"41","gid":"17","children":[]}]},{"id":"42","name":"\u6587\u658c","pid":"45","gid":"16","children":[{"id":"121","name":"\u745e\u7403","pid":"42","gid":"17","children":[]},{"id":"122","name":"\u745e\u8d24","pid":"42","gid":"17","children":[]}]},{"id":"43","name":"\u6587\u6bd3","pid":"45","gid":"16","children":[{"id":"123","name":"\u745e\u4e49","pid":"43","gid":"17","children":[]},{"id":"124","name":"\u745e\u76db","pid":"43","gid":"17","children":[]}]},{"id":"44","name":"\u6587\u8302","pid":"45","gid":"16","children":[{"id":"46","name":"\u745e\u8d85","pid":"44","gid":"17","children":[{"id":"47","name":"\u4eba\u5112","pid":"46","gid":"18","children":[{"id":"101","name":"\u9521\u8d24","pid":"47","gid":"19","children":[{"id":"125","name":"\u9e3f\u6210","pid":"101","gid":"20","children":[]},{"id":"126","name":"\u5b9c\u6210","pid":"101","gid":"20","children":[]},{"id":"127","name":"\u67cf\u6210","pid":"101","gid":"20","children":[]},{"id":"128","name":"\u91d1\u6210","pid":"101","gid":"20","children":[]}]},{"id":"102","name":"\u9521\u5c27","pid":"47","gid":"19","children":[{"id":"129","name":"\u6587\u6210","pid":"102","gid":"20","children":[]},{"id":"130","name":"\u4e09\u6210","pid":"102","gid":"20","children":[]},{"id":"131","name":"\u5bb6\u6210","pid":"102","gid":"20","children":[]},{"id":"132","name":"\u8d35\u6210","pid":"102","gid":"20","children":[]},{"id":"133","name":"\u656c\u6210","pid":"102","gid":"20","children":[]}]},{"id":"103","name":"\u9521\u91d1","pid":"47","gid":"19","children":[{"id":"134","name":"\u5b98\u6210","pid":"103","gid":"20","children":[]},{"id":"135","name":"\u7acb\u6210","pid":"103","gid":"20","children":[]}]},{"id":"104","name":"\u9521\u8f69","pid":"47","gid":"19","children":[]},{"id":"105","name":"\u9521\u65f6","pid":"47","gid":"19","children":[{"id":"136","name":"\u5065\u6210","pid":"105","gid":"20","children":[]},{"id":"137","name":"\u8bb0\u6210","pid":"105","gid":"20","children":[]},{"id":"138","name":"\u8fbe\u6210","pid":"105","gid":"20","children":[]},{"id":"139","name":"\u79c0\u6210","pid":"105","gid":"20","children":[]}]}]},{"id":"48","name":"\u4eba\u76db","pid":"46","gid":"18","children":[{"id":"106","name":"\u9521\u5e86","pid":"48","gid":"19","children":[{"id":"140","name":"\u65b9\u6210","pid":"106","gid":"20","children":[{"id":"141","name":"\u5e94\u793c","pid":"140","gid":"21","children":[]},{"id":"142","name":"\u5e94\u4fe1","pid":"140","gid":"21","children":[]},{"id":"143","name":"\u5e94\u4e91","pid":"140","gid":"21","children":[]}]}]},{"id":"107","name":"\u9521\u65fa","pid":"48","gid":"19","children":[{"id":"144","name":"\u96f2\u6210","pid":"107","gid":"20","children":[]}]},{"id":"108","name":"\u9521\u5b9d","pid":"48","gid":"19","children":[{"id":"145","name":"\u5e7f\u6210","pid":"108","gid":"20","children":[]},{"id":"146","name":"\u6577\u6210","pid":"108","gid":"20","children":[]}]},{"id":"109","name":"\u9521\u5170","pid":"48","gid":"19","children":[{"id":"147","name":"\u4e50\u6210","pid":"109","gid":"20","children":[]},{"id":"148","name":"\u963f\u4e03","pid":"109","gid":"20","children":[]}]},{"id":"110","name":"\u91d1\u798f","pid":"48","gid":"19","children":[]},{"id":"111","name":"\u9521\u5764","pid":"48","gid":"19","children":[{"id":"149","name":"\u805a\u6210","pid":"111","gid":"20","children":[]},{"id":"150","name":"\u8302\u6210","pid":"111","gid":"20","children":[]}]}]},{"id":"49","name":"\u4eba\u548c","pid":"46","gid":"18","children":[{"id":"52","name":"\u9521\u98ce","pid":"49","gid":"19","children":[{"id":"97","name":"\u5927\u6210","pid":"52","gid":"20","children":[]},{"id":"98","name":"\u79c9\u6210","pid":"52","gid":"20","children":[]},{"id":"99","name":"\u666f\u6210","pid":"52","gid":"20","children":[]},{"id":"100","name":"\u68ee\u6210","pid":"52","gid":"20","children":[]}]},{"id":"53","name":"\u9521\u53bb","pid":"49","gid":"19","children":[]},{"id":"54","name":"\u9521\u743c","pid":"49","gid":"19","children":[{"id":"80","name":"\u666e\u6210","pid":"54","gid":"20","children":[{"id":"82","name":"\u5e94\u6587","pid":"80","gid":"21","children":[]},{"id":"83","name":"\u5e94\u660c","pid":"80","gid":"21","children":[]}]},{"id":"81","name":"\u56fd\u6210","pid":"54","gid":"20","children":[{"id":"84","name":"\u6c34\u798f","pid":"81","gid":"21","children":[]},{"id":"85","name":"\u5e94\u534e","pid":"81","gid":"21","children":[]},{"id":"86","name":"\u5e94\u65b9","pid":"81","gid":"21","children":[{"id":"93","name":"\u539f\u82f1","pid":"86","gid":"22","children":[{"id":"94","name":"\u5f00\u987a","pid":"93","gid":"23","children":[]},{"id":"95","name":"\u5f00\u806a","pid":"93","gid":"23","children":[]}]}]},{"id":"87","name":"\u5e94\u5fe0","pid":"81","gid":"21","children":[{"id":"89","name":"\u806a\u82f1","pid":"87","gid":"22","children":[]},{"id":"90","name":"\u5e78\u82f1","pid":"87","gid":"22","children":[]},{"id":"91","name":"\u543e\u82f1","pid":"87","gid":"22","children":[]},{"id":"92","name":"\u7ca4\u82f1","pid":"87","gid":"22","children":[]}]},{"id":"88","name":"\u5e94\u7389","pid":"81","gid":"21","children":[{"id":"96","name":"\u658c\u82f1","pid":"88","gid":"22","children":[]}]}]}]},{"id":"55","name":"\u9521\u884c","pid":"49","gid":"19","children":[]},{"id":"56","name":"\u9521\u74d2","pid":"49","gid":"19","children":[{"id":"57","name":"\u4f5c\u6210(\u51fa\u7ee7\u9521\u884c)","pid":"56","gid":"20","children":[{"id":"67","name":"\u5e94\u52c7","pid":"57","gid":"21","children":[]},{"id":"68","name":"\u5e94\u8d85","pid":"57","gid":"21","children":[{"id":"70","name":"\u674e\u82f1","pid":"68","gid":"22","children":[{"id":"74","name":"\u5f00\u653e","pid":"70","gid":"23","children":[]},{"id":"75","name":"\u5f00\u90c1","pid":"70","gid":"23","children":[]}]},{"id":"71","name":"\u4e8c\u82f1","pid":"68","gid":"22","children":[{"id":"76","name":"\u571f\u6e90","pid":"71","gid":"23","children":[]},{"id":"77","name":"\u571f\u950b","pid":"71","gid":"23","children":[]}]}]},{"id":"69","name":"\u5e94\u6bc5","pid":"57","gid":"21","children":[{"id":"72","name":"\u708e\u82f1","pid":"69","gid":"22","children":[]},{"id":"73","name":"\u4f5c\u82f1","pid":"69","gid":"22","children":[]}]}]},{"id":"58","name":"\u4fe1\u6210","pid":"56","gid":"20","children":[{"id":"60","name":"\u5e94\u5c31","pid":"58","gid":"21","children":[{"id":"61","name":"\u76db\u82f1","pid":"60","gid":"22","children":[{"id":"63","name":"\u6770\u68cb","pid":"61","gid":"23","children":[]},{"id":"64","name":"\u6770\u94ed","pid":"61","gid":"23","children":[]}]},{"id":"62","name":"\u5c31\u82f1","pid":"60","gid":"22","children":[{"id":"65","name":"\u589e\u950b","pid":"62","gid":"23","children":[]},{"id":"66","name":"\u6842\u94ed","pid":"62","gid":"23","children":[]}]}]}]},{"id":"59","name":"\u660c\u6210","pid":"56","gid":"20","children":[{"id":"78","name":"\u5e94\u6d77","pid":"59","gid":"21","children":[{"id":"79","name":"\u7965\u82f1","pid":"78","gid":"22","children":[]}]}]}]}]},{"id":"50","name":"\u4eba\u539a","pid":"46","gid":"18","children":[{"id":"112","name":"\u9521\u7235","pid":"50","gid":"19","children":[{"id":"151","name":"\u5174\u6210","pid":"112","gid":"20","children":[]},{"id":"152","name":"\u706b\u751f","pid":"112","gid":"20","children":[]},{"id":"153","name":"\u963f\u6c34","pid":"112","gid":"20","children":[]},{"id":"154","name":"\u8c37\u6210","pid":"112","gid":"20","children":[]}]},{"id":"113","name":"\u9521\u7ecf","pid":"50","gid":"19","children":[]},{"id":"114","name":"\u9521\u5085(\u51fa\u7ee7\u4eba\u534e)","pid":"50","gid":"19","children":[{"id":"155","name":"\u957f\u5b50","pid":"114","gid":"20","children":[]},{"id":"156","name":"\u5b98\u60e0","pid":"114","gid":"20","children":[]}]},{"id":"115","name":"\u9521\u5b9c","pid":"50","gid":"19","children":[{"id":"157","name":"\u5e7f\u573a","pid":"115","gid":"20","children":[]}]}]},{"id":"51","name":"\u4eba\u534e","pid":"46","gid":"18","children":[]}]}]}]},{"id":"158","name":"\u6b63\u53d7","pid":"37","gid":"15","children":[]},{"id":"159","name":"\u9526\u53d7","pid":"37","gid":"15","children":[]},{"id":"160","name":"\u73d6\u53d7","pid":"37","gid":"15","children":[]}]},{"id":"38","name":"\u671d\u9009","pid":"35","gid":"14","children":[]},{"id":"39","name":"\u671d\u7389","pid":"35","gid":"14","children":[]},{"id":"40","name":"\u671d\u5f66","pid":"35","gid":"14","children":[]}]}]}]}]},{"id":"32","name":"\u4e91\u6770(\u77f3\u4e95\u77f3\u6e7e\u513f\u7956)","pid":"29","gid":"10","children":[]}]}]},{"id":"28","name":"\u9053\u5347","pid":"24","gid":"8","children":[]}]}]}]},{"id":"21","name":"\u8302","pid":"16","gid":"5","children":[]},{"id":"22","name":"\u5eb7\u6108","pid":"16","gid":"5","children":[]}]}]}]},{"id":"13","name":"\u540d\u663e","pid":"10","gid":"2","children":[]}]}]}]}]}]}
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
