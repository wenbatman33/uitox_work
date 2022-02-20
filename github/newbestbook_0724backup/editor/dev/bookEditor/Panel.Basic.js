function BasicPanel() {
    this.id = "";
    
    /**
     * 是否已繪出HTML
     */
    this.isRender = false;
    
    /**
     * 目前是否為顯示
     */
    this.isShow = false;
    
    /**
     * 繪出HTML
     */
    this.render = function() {};
    
    /**
     * 重新設定大小
     */
    this.resize = function() {};
    
    /**
     * 隱藏Panel
     */
    this.hide = function() {$('div#'+this.id).hide(); this.isShow=false;};
    
    /**
     * 顯示Panel
     */
    this.show = function() {$('div#'+this.id).show(); this.isShow=true;};
    
    /**
     * get width
     */
    this.width = function() { return $('div#'+this.id).width();};
    
    /**
     * get height
     */
    this.height = function() {return $('div#'+this.id).height();};
}