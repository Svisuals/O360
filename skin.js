// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: Obra_360.ggsk
// Generated 2024-07-11T20:48:02

function pano2vrSkin(player,base) {
	player.addVariable('TITLES', 2, false);
	player.addVariable('FIRST', 2, false);
	player.addVariable('img_1', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('var_hs', 1, 0);
	player.addVariable('EventosLigados', 2, true);
	player.addVariable('Ponto1', 2, false);
	player.addVariable('Ponto2', 2, false);
	player.addVariable('Ponto3', 2, false);
	player.addVariable('Ponto4', 2, false);
	player.addVariable('Ponto5', 2, false);
	player.addVariable('SEMANA_PASSADA', 2, false);
	player.addVariable('SEMANA_ATUAL', 2, true);
	player.addVariable('B1', 2, false);
	player.addVariable('B2', 2, false);
	player.addVariable('Ponto6', 2, false);
	player.addVariable('Ponto7', 2, false);
	player.addVariable('Ponto8', 2, false);
	player.addVariable('Ponto9', 2, false);
	player.addVariable('SETA', 2, false);
	player.addVariable('VID', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzM0NS4yNSAtMjYwNiAzMiAzMiIgdmVyc2lvbj0iMS4xIiB4PSIwcH'+
			'giIGhlaWdodD0iMzJweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0zMzQ1LjI1IC0yNjA2IDMyIDMyIj4KIDxnIGlkPSJMYXllcl8xIi8+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zMzI5LjI0OS0yNjAyLjVjLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjVzNS42MDcsMTIuNSwxMi41LDEyLjVjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MtMzMyMi4zNTUtMjYw'+
			'Mi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjhjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1ODAuMTMyLTMzMjkuMjQ5LTI1ODAuMTMyeiIgZmlsbD0iIzFBMTcxQiIvPgogICAgPHBhdGggZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NmMwLTAuNjY4LTAuNTQyLTEuMjA5LT'+
			'EuMjEtMS4yMDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjJjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTNjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTc5LTAuMjk3LDEuMDM2LTAu'+
			'NTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyYzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NUMtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyYy0wLjY3NSwwLTEuMjMzLTAuMjg3LT'+
			'EuODc5LTAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTZjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3N2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFo'+
			'OC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMWMwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBmaWxsPSIjMUExNzFCIi8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0tMzMyOS4yNDktMjYwMi41Yy02Ljg5MiwwLTEyLjUsNS42MDctMTIuNSwxMi41czUuNjA3LDEyLjUsMTIuNSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OT'+
			'smI3g5OyYjeDk7YzYuODkzLDAsMTIuNS01LjYwNywxMi41LTEyLjVTLTMzMjIuMzU1LTI2MDIuNS0zMzI5LjI0OS0yNjAyLjV6IE0tMzMyOS4yNDktMjU4MC4xMzJjLTUuNDQxLDAtOS44Ny00LjQyNy05Ljg3LTkuODY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtNS40NDIsNC40MjktOS44NjksOS44Ny05Ljg2OWM1LjQ0MiwwLDkuODcsNC40MjgsOS44Nyw5Ljg2OUMtMzMxOS4zNzgtMjU4NC41Ni0zMzIzLjgwNS0yNTgwLjEzMi0zMzI5LjI0OS0yNTgwLjEzMnoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0t'+
			'MzMyMS41ODktMjU5My44MDhjLTAuOS0xLjI2LTIuMzk5LTEuNDIyLTMuNjA0LTEuNDIyaC0xLjcwNHYtMS42NDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjY2OC0wLjU0Mi0xLjIwOS0xLjIxLTEuMjA5aC0yLjI4MWMtMC42NjgsMC0xLjIxLDAuNTQxLTEuMjEsMS4yMDl2MS42NDZoLTEuNzAyYy0xLjIwNSwwLTIuNzA0LDAuMTYyLTMuNjA2LDEuNDIyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY4OCwwLjk2MS0xLjAwNywyLjIyLTEuMDA3LDMuOTYzYzAsMi4xLDAuNjAxLDMuODE3LDEuNjA5LDQuNTkzYzAuODgxLDAuNjc5LDEuNTA2LDAuNzkzLDIuNTczLD'+
			'AuNzkzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMjU4LDAsMi4yMTQtMC40OSwyLjk4Mi0wLjg4M2MwLjU3OS0wLjI5NywxLjAzNi0wLjUzMSwxLjUwMS0wLjUzMXMwLjkyMywwLjIzNCwxLjUwMiwwLjUzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjc2NywwLjM5MywxLjcyNCwwLjg4MiwyLjk4MiwwLjg4MmMxLjA2NSwwLDEuNjktMC4xMTQsMi41NzItMC43OTJjMS4wMDktMC43NzYsMS42MTEtMi40OTMsMS42MTEtNC41OTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMjAuNTgxLTI1OTEuNTg4LTMzMjAuOTAyLTI1OTIuODQ4LTMzMjEuNTg5LTI1'+
			'OTMuODA4eiBNLTMzMjMuNjY3LTI1ODcuMTY4Yy0wLjMzNSwwLjI1OS0wLjM3OCwwLjI5Mi0xLjA5NywwLjI5MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NzUsMC0xLjIzMy0wLjI4Ny0xLjg3OS0wLjYxOGMtMC43MjktMC4zNzMtMS41NTctMC43OTYtMi42MDUtMC43OTZzLTEuODc1LDAuNDIzLTIuNjA0LDAuNzk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY0NiwwLjMzMi0xLjIwNCwwLjYxOC0xLjg3OSwwLjYxOGMtMC43MTksMC0wLjc2Mi0wLjAzMy0xLjA5Ni0wLjI5MmMtMC4xNDItMC4xMTItMC42NjgtMC44OTMtMC42NjgtMi42NzcmI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5OyYjeDk7JiN4OTtjMC0xLjE5NywwLjE4MS0yLjAzMywwLjU1NS0yLjU1NWMwLjEyNi0wLjE3NiwwLjQzNC0wLjQxMSwxLjY0LTAuNDExaDguMTA3YzEuMjA1LDAsMS41MTIsMC4yMzQsMS42MzgsMC40MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zNzQsMC41MjIsMC41NTYsMS4zNTgsMC41NTYsMi41NTVDLTMzMjMtMjU4OC4wNi0zMzIzLjUyNy0yNTg3LjI4LTMzMjMuNjY3LTI1ODcuMTY4eiIgZmlsbD0ibm9uZSIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zMzI5LjI0OS0yNjAyLjVjLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjVzNS42MDcs'+
			'MTIuNSwxMi41LDEyLjVjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MtMzMyMi4zNTUtMjYwMi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjhjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1ODAuMTMyLTMzMjkuMjQ5LTI1ODAuMTMyeiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPHBhdGggZD0iTS'+
			'0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NmMwLTAuNjY4LTAuNTQyLTEuMjA5LTEuMjEtMS4yMDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjJjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMs'+
			'MC43OTNjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTc5LTAuMjk3LDEuMDM2LTAuNTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyYzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NUMtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3'+
			'g5OyYjeDk7IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyYy0wLjY3NSwwLTEuMjMzLTAuMjg3LTEuODc5LTAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTZjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3N2MwLTEuMTk3LDAu'+
			'MTgxLTIuMDMzLDAuNTU1LTIuNTU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFoOC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMWMwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNLTMzMjkuMjQ5LTI2MD'+
			'IuNWMtNi44OTIsMC0xMi41LDUuNjA3LTEyLjUsMTIuNXM1LjYwNywxMi41LDEyLjUsMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M2Ljg5MywwLDEyLjUtNS42MDcsMTIuNS0xMi41Uy0zMzIyLjM1NS0yNjAyLjUtMzMyOS4yNDktMjYwMi41eiBNLTMzMjkuMjQ5LTI1ODAuMTMyYy01LjQ0MSwwLTkuODctNC40MjctOS44Ny05Ljg2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTUuNDQyLDQuNDI5LTkuODY5LDkuODctOS44NjljNS40NDIsMCw5Ljg3LDQuNDI4LDkuODcsOS44NjlDLTMzMTkuMzc4LTI1ODQuNTYtMzMyMy44MDUtMjU4MC4xMzItMzMyOS4yNDktMjU4'+
			'MC4xMzJ6IiBmaWxsPSJub25lIi8+CiAgICA8cGF0aCBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNLTMzMjEuNTg5LTI1OTMuODA4Yy0wLjktMS4yNi0yLjM5OS0xLjQyMi0zLjYwNC0xLjQyMmgtMS43MDR2LTEuNjQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMC42NjgtMC41NDItMS4yMDktMS4yMS0xLjIwOWgtMi4yODFjLTAuNjY4LDAtMS4yMSwwLjU0MS0xLjIxLDEuMjA5djEuNjQ2aC0xLjcwMmMtMS4yMDUsMC0yLjcwNCwwLjE2Mi0zLjYwNiwxLjQyMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42ODgsMC45NjEtMS4wMDcsMi4yMi'+
			'0xLjAwNywzLjk2M2MwLDIuMSwwLjYwMSwzLjgxNywxLjYwOSw0LjU5M2MwLjg4MSwwLjY3OSwxLjUwNiwwLjc5MywyLjU3MywwLjc5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjI1OCwwLDIuMjE0LTAuNDksMi45ODItMC44ODNjMC41NzktMC4yOTcsMS4wMzYtMC41MzEsMS41MDEtMC41MzFzMC45MjMsMC4yMzQsMS41MDIsMC41MzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC43NjcsMC4zOTMsMS43MjQsMC44ODIsMi45ODIsMC44ODJjMS4wNjUsMCwxLjY5LTAuMTE0LDIuNTcyLTAuNzkyYzEuMDA5LTAuNzc2LDEuNjExLTIuNDkzLDEuNjExLTQuNTk1JiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzIwLjU4MS0yNTkxLjU4OC0zMzIwLjkwMi0yNTkyLjg0OC0zMzIxLjU4OS0yNTkzLjgwOHogTS0zMzIzLjY2Ny0yNTg3LjE2OGMtMC4zMzUsMC4yNTktMC4zNzgsMC4yOTItMS4wOTcsMC4yOTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjc1LDAtMS4yMzMtMC4yODctMS44NzktMC42MThjLTAuNzI5LTAuMzczLTEuNTU3LTAuNzk2LTIuNjA1LTAuNzk2cy0xLjg3NSwwLjQyMy0yLjYwNCwwLjc5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NDYsMC4zMzItMS4yMDQsMC42MTgtMS44NzksMC42MThjLTAuNzE5LD'+
			'AtMC43NjItMC4wMzMtMS4wOTYtMC4yOTJjLTAuMTQyLTAuMTEyLTAuNjY4LTAuODkzLTAuNjY4LTIuNjc3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMS4xOTcsMC4xODEtMi4wMzMsMC41NTUtMi41NTVjMC4xMjYtMC4xNzYsMC40MzQtMC40MTEsMS42NC0wLjQxMWg4LjEwN2MxLjIwNSwwLDEuNTEyLDAuMjM0LDEuNjM4LDAuNDExJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMzc0LDAuNTIyLDAuNTU2LDEuMzU4LDAuNTU2LDIuNTU1Qy0zMzIzLTI1ODguMDYtMzMyMy41MjctMjU4Ny4yOC0zMzIzLjY2Ny0yNTg3LjE2OHoiIGZpbGw9Im5vbmUiLz4KICAgPC9nPgog'+
			'IDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIi8+Cjwvc3ZnPgo=';
		me._enter_vr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzM0NS4yNSAtMjU3MS4zMzMgMzIgMzIiIHZlcnNpb249IjEuMSIgeD'+
			'0iMHB4IiBoZWlnaHQ9IjMycHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSItMzM0NS4yNSAtMjU3MS4zMzMgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTMzMjkuMjUtMjU2OS4wODNjLTcuNTgxLDAtMTMuNzUsNi4xNjgtMTMuNzUsMTMuNzQ5YzAsNy41ODMsNi4xNjgsMTMuNzUsMTMuNzUsMTMuNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNy41ODMsMCwxMy43NS02LjE2'+
			'NywxMy43NS0xMy43NUMtMzMxNS41LTI1NjIuOTE1LTMzMjEuNjY3LTI1NjkuMDgzLTMzMjkuMjUtMjU2OS4wODN6IE0tMzMyOS4yNS0yNTQ0LjQ3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtNS45ODUsMC0xMC44NTctNC44NjktMTAuODU3LTEwLjg1NWMwLTUuOTg2LDQuODcyLTEwLjg1NSwxMC44NTctMTAuODU1YzUuOTg3LDAsMTAuODU3LDQuODcxLDEwLjg1NywxMC44NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMTguMzkzLTI1NDkuMzQ5LTMzMjMuMjYyLTI1NDQuNDc5LTMzMjkuMjUtMjU0NC40Nzl6IiBmaWxsPSIjMUExNzFCIi8+CiAgICA8cGF0aCBkPS'+
			'JNLTMzMjAuODI1LTI1NTkuNTIxYy0wLjk5LTEuMzg3LTIuNjM5LTEuNTY0LTMuOTY1LTEuNTY0aC0xLjg3NXYtMS44MTJjMC0wLjczNC0wLjU5Ni0xLjMzLTEuMzMxLTEuMzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuNTA5Yy0wLjczNSwwLTEuMzMxLDAuNTk2LTEuMzMxLDEuMzN2MS44MTJoLTEuODczYy0xLjMyNSwwLTIuOTc0LDAuMTc4LTMuOTY3LDEuNTY0Yy0wLjc1NiwxLjA1Ny0xLjEwNywyLjQ0Mi0xLjEwNyw0LjM1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDIuMzEsMC42NjIsNC4xOTksMS43Nyw1LjA1M2MwLjk2OSwwLjc0NywxLjY1NywwLjg3Mywy'+
			'LjgzMSwwLjg3M2MxLjM4NCwwLDIuNDM2LTAuNTM5LDMuMjgxLTAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNjM3LTAuMzI3LDEuMTQtMC41ODQsMS42NTEtMC41ODRjMC41MTIsMCwxLjAxNSwwLjI1NywxLjY1MiwwLjU4NGMwLjg0NCwwLjQzMiwxLjg5NywwLjk3LDMuMjgxLDAuOTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4xNzEsMCwxLjg1OS0wLjEyNSwyLjgzLTAuODcxYzEuMTA5LTAuODU0LDEuNzcyLTIuNzQzLDEuNzcyLTUuMDU0Qy0zMzE5LjcxNS0yNTU3LjA4MS0zMzIwLjA2OC0yNTU4LjQ2Ni0zMzIwLjgyNS0yNTU5LjUyMXomI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzIzLjExMS0yNTUyLjIxOGMtMC4zNjksMC4yODUtMC40MTYsMC4zMjEtMS4yMDYsMC4zMjFjLTAuNzQyLDAtMS4zNTctMC4zMTUtMi4wNjctMC42NzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODAyLTAuNDExLTEuNzEyLTAuODc2LTIuODY2LTAuODc2Yy0xLjE1MywwLTIuMDYyLDAuNDY1LTIuODY1LDAuODc2Yy0wLjcxLDAuMzY0LTEuMzI1LDAuNjc5LTIuMDY3LDAuNjc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc5MSwwLTAuODM4LTAuMDM2LTEuMjA1LTAuMzJjLTAuMTU2LTAuMTIzLTAuNzM1LTAuOTgxLTAuNzM1'+
			'LTIuOTQ1YzAtMS4zMTcsMC4yLTIuMjM2LDAuNjEtMi44MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMzgtMC4xOTQsMC40NzctMC40NTIsMS44MDMtMC40NTJoOC45MThjMS4zMjYsMCwxLjY2MywwLjI1NywxLjgwMSwwLjQ1MmMwLjQxMiwwLjU3NSwwLjYxMSwxLjQ5NCwwLjYxMSwyLjgxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMi4zNzctMjU1My4xOTktMzMyMi45NTYtMjU1Mi4zNDEtMzMyMy4xMTEtMjU1Mi4yMTh6IiBmaWxsPSIjMUExNzFCIi8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIHN0cm9rZT0iIzFBMTcxQiIgc3'+
			'Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0tMzMyOS4yNS0yNTY5LjA4M2MtNy41ODEsMC0xMy43NSw2LjE2OC0xMy43NSwxMy43NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw3LjU4Myw2LjE2OCwxMy43NSwxMy43NSwxMy43NWM3LjU4MywwLDEzLjc1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zMzE1LjUtMjU2Mi45MTUtMzMyMS42NjctMjU2OS4wODMtMzMyOS4yNS0yNTY5LjA4M3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzI5LjI1LTI1NDQuNDc5Yy01Ljk4NSwwLTEwLjg1Ny00Ljg2OS0xMC44NTctMTAuODU1YzAtNS45ODYsNC44NzItMTAuODU1LDEwLjg1Ny0xMC44'+
			'NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNS45ODcsMCwxMC44NTcsNC44NzEsMTAuODU3LDEwLjg1NUMtMzMxOC4zOTMtMjU0OS4zNDktMzMyMy4yNjItMjU0NC40NzktMzMyOS4yNS0yNTQ0LjQ3OXoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0tMzMyMC44MjUtMjU1OS41MjFjLTAuOTktMS4zODctMi42MzktMS41NjQtMy45NjUtMS41NjRoLTEuODc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7di0xLjgxMmMwLTAuNzM0LTAuNTk2LTEuMzMtMS4zMzEtMS4zM2gtMi41MDljLTAuNzM1LDAtMS4zMz'+
			'EsMC41OTYtMS4zMzEsMS4zM3YxLjgxMmgtMS44NzNjLTEuMzI1LDAtMi45NzQsMC4xNzgtMy45NjcsMS41NjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzU2LDEuMDU3LTEuMTA3LDIuNDQyLTEuMTA3LDQuMzU5YzAsMi4zMSwwLjY2Miw0LjE5OSwxLjc3LDUuMDUzYzAuOTY5LDAuNzQ3LDEuNjU3LDAuODczLDIuODMxLDAuODczJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMzg0LDAsMi40MzYtMC41MzksMy4yODEtMC45NzFjMC42MzctMC4zMjcsMS4xNC0wLjU4NCwxLjY1MS0wLjU4NGMwLjUxMiwwLDEuMDE1LDAuMjU3LDEuNjUyLDAuNTg0JiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTsmI3g5OyYjeDk7YzAuODQ0LDAuNDMyLDEuODk3LDAuOTcsMy4yODEsMC45N2MxLjE3MSwwLDEuODU5LTAuMTI1LDIuODMtMC44NzFjMS4xMDktMC44NTQsMS43NzItMi43NDMsMS43NzItNS4wNTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMTkuNzE1LTI1NTcuMDgxLTMzMjAuMDY4LTI1NTguNDY2LTMzMjAuODI1LTI1NTkuNTIxeiBNLTMzMjMuMTExLTI1NTIuMjE4Yy0wLjM2OSwwLjI4NS0wLjQxNiwwLjMyMS0xLjIwNiwwLjMyMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NDIsMC0xLjM1Ny0wLjMxNS0yLjA2Ny0wLjY3OWMtMC44MDItMC40MT'+
			'EtMS43MTItMC44NzYtMi44NjYtMC44NzZjLTEuMTUzLDAtMi4wNjIsMC40NjUtMi44NjUsMC44NzYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzEsMC4zNjQtMS4zMjUsMC42NzktMi4wNjcsMC42NzljLTAuNzkxLDAtMC44MzgtMC4wMzYtMS4yMDUtMC4zMmMtMC4xNTYtMC4xMjMtMC43MzUtMC45ODEtMC43MzUtMi45NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0xLjMxNywwLjItMi4yMzYsMC42MS0yLjgxMWMwLjEzOC0wLjE5NCwwLjQ3Ny0wLjQ1MiwxLjgwMy0wLjQ1Mmg4LjkxOGMxLjMyNiwwLDEuNjYzLDAuMjU3LDEuODAxLDAuNDUyJiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTsmI3g5OyYjeDk7YzAuNDEyLDAuNTc1LDAuNjExLDEuNDk0LDAuNjExLDIuODExQy0zMzIyLjM3Ny0yNTUzLjE5OS0zMzIyLjk1Ni0yNTUyLjM0MS0zMzIzLjExMS0yNTUyLjIxOHoiIGZpbGw9Im5vbmUiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0tMzMyOS4yNS0yNTY5LjA4M2MtNy41ODEsMC0xMy43NSw2LjE2OC0xMy43NSwxMy43NDljMCw3LjU4Myw2LjE2OCwxMy43NSwxMy43NSwxMy43NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M3LjU4MywwLDEzLjc1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zMzE1LjUtMjU2Mi45MTUtMzMyMS42NjctMjU2OS4wODMtMz'+
			'MyOS4yNS0yNTY5LjA4M3ogTS0zMzI5LjI1LTI1NDQuNDc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy01Ljk4NSwwLTEwLjg1Ny00Ljg2OS0xMC44NTctMTAuODU1YzAtNS45ODYsNC44NzItMTAuODU1LDEwLjg1Ny0xMC44NTVjNS45ODcsMCwxMC44NTcsNC44NzEsMTAuODU3LDEwLjg1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMxOC4zOTMtMjU0OS4zNDktMzMyMy4yNjItMjU0NC40NzktMzMyOS4yNS0yNTQ0LjQ3OXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzMyMC44MjUtMjU1OS41MjFjLTAuOTktMS4zODctMi42MzktMS41NjQtMy45NjUt'+
			'MS41NjRoLTEuODc1di0xLjgxMmMwLTAuNzM0LTAuNTk2LTEuMzMtMS4zMzEtMS4zMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gtMi41MDljLTAuNzM1LDAtMS4zMzEsMC41OTYtMS4zMzEsMS4zM3YxLjgxMmgtMS44NzNjLTEuMzI1LDAtMi45NzQsMC4xNzgtMy45NjcsMS41NjRjLTAuNzU2LDEuMDU3LTEuMTA3LDIuNDQyLTEuMTA3LDQuMzU5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMi4zMSwwLjY2Miw0LjE5OSwxLjc3LDUuMDUzYzAuOTY5LDAuNzQ3LDEuNjU3LDAuODczLDIuODMxLDAuODczYzEuMzg0LDAsMi40MzYtMC41MzksMy4yODEtMC45NzEmI3hkOyYjeG'+
			'E7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC42MzctMC4zMjcsMS4xNC0wLjU4NCwxLjY1MS0wLjU4NGMwLjUxMiwwLDEuMDE1LDAuMjU3LDEuNjUyLDAuNTg0YzAuODQ0LDAuNDMyLDEuODk3LDAuOTcsMy4yODEsMC45NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjE3MSwwLDEuODU5LTAuMTI1LDIuODMtMC44NzFjMS4xMDktMC44NTQsMS43NzItMi43NDMsMS43NzItNS4wNTRDLTMzMTkuNzE1LTI1NTcuMDgxLTMzMjAuMDY4LTI1NTguNDY2LTMzMjAuODI1LTI1NTkuNTIxeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTMzMjMuMTExLTI1NTIuMjE4Yy0wLjM2OSwwLjI4'+
			'NS0wLjQxNiwwLjMyMS0xLjIwNiwwLjMyMWMtMC43NDIsMC0xLjM1Ny0wLjMxNS0yLjA2Ny0wLjY3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC44MDItMC40MTEtMS43MTItMC44NzYtMi44NjYtMC44NzZjLTEuMTUzLDAtMi4wNjIsMC40NjUtMi44NjUsMC44NzZjLTAuNzEsMC4zNjQtMS4zMjUsMC42NzktMi4wNjcsMC42NzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzkxLDAtMC44MzgtMC4wMzYtMS4yMDUtMC4zMmMtMC4xNTYtMC4xMjMtMC43MzUtMC45ODEtMC43MzUtMi45NDVjMC0xLjMxNywwLjItMi4yMzYsMC42MS0yLjgxMSYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7JiN4OTsmI3g5O2MwLjEzOC0wLjE5NCwwLjQ3Ny0wLjQ1MiwxLjgwMy0wLjQ1Mmg4LjkxOGMxLjMyNiwwLDEuNjYzLDAuMjU3LDEuODAxLDAuNDUyYzAuNDEyLDAuNTc1LDAuNjExLDEuNDk0LDAuNjExLDIuODExJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzIyLjM3Ny0yNTUzLjE5OS0zMzIyLjk1Ni0yNTUyLjM0MS0zMzIzLjExMS0yNTUyLjIxOHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0tMzMyOS4yNS0yNTY5LjA4M2MtNy41ODEsMC0xMy43NSw2LjE2OC0xMy43'+
			'NSwxMy43NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw3LjU4Myw2LjE2OCwxMy43NSwxMy43NSwxMy43NWM3LjU4MywwLDEzLjc1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zMzE1LjUtMjU2Mi45MTUtMzMyMS42NjctMjU2OS4wODMtMzMyOS4yNS0yNTY5LjA4M3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzI5LjI1LTI1NDQuNDc5Yy01Ljk4NSwwLTEwLjg1Ny00Ljg2OS0xMC44NTctMTAuODU1YzAtNS45ODYsNC44NzItMTAuODU1LDEwLjg1Ny0xMC44NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNS45ODcsMCwxMC44NTcsNC44NzEsMTAuODU3LDEwLj'+
			'g1NUMtMzMxOC4zOTMtMjU0OS4zNDktMzMyMy4yNjItMjU0NC40NzktMzMyOS4yNS0yNTQ0LjQ3OXoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0tMzMyMC44MjUtMjU1OS41MjFjLTAuOTktMS4zODctMi42MzktMS41NjQtMy45NjUtMS41NjRoLTEuODc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7di0xLjgxMmMwLTAuNzM0LTAuNTk2LTEuMzMtMS4zMzEtMS4zM2gtMi41MDljLTAuNzM1LDAtMS4zMzEsMC41OTYtMS4zMzEsMS4zM3YxLjgxMmgtMS44NzNjLTEuMzI1LDAtMi45NzQsMC4xNzgtMy45NjcsMS41NjQm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzU2LDEuMDU3LTEuMTA3LDIuNDQyLTEuMTA3LDQuMzU5YzAsMi4zMSwwLjY2Miw0LjE5OSwxLjc3LDUuMDUzYzAuOTY5LDAuNzQ3LDEuNjU3LDAuODczLDIuODMxLDAuODczJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMzg0LDAsMi40MzYtMC41MzksMy4yODEtMC45NzFjMC42MzctMC4zMjcsMS4xNC0wLjU4NCwxLjY1MS0wLjU4NGMwLjUxMiwwLDEuMDE1LDAuMjU3LDEuNjUyLDAuNTg0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuODQ0LDAuNDMyLDEuODk3LDAuOTcsMy4yODEsMC45N2MxLjE3MSwwLDEuOD'+
			'U5LTAuMTI1LDIuODMtMC44NzFjMS4xMDktMC44NTQsMS43NzItMi43NDMsMS43NzItNS4wNTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMTkuNzE1LTI1NTcuMDgxLTMzMjAuMDY4LTI1NTguNDY2LTMzMjAuODI1LTI1NTkuNTIxeiBNLTMzMjMuMTExLTI1NTIuMjE4Yy0wLjM2OSwwLjI4NS0wLjQxNiwwLjMyMS0xLjIwNiwwLjMyMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NDIsMC0xLjM1Ny0wLjMxNS0yLjA2Ny0wLjY3OWMtMC44MDItMC40MTEtMS43MTItMC44NzYtMi44NjYtMC44NzZjLTEuMTUzLDAtMi4wNjIsMC40NjUtMi44NjUsMC44NzYmI3hkOyYj'+
			'eGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzEsMC4zNjQtMS4zMjUsMC42NzktMi4wNjcsMC42NzljLTAuNzkxLDAtMC44MzgtMC4wMzYtMS4yMDUtMC4zMmMtMC4xNTYtMC4xMjMtMC43MzUtMC45ODEtMC43MzUtMi45NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0xLjMxNywwLjItMi4yMzYsMC42MS0yLjgxMWMwLjEzOC0wLjE5NCwwLjQ3Ny0wLjQ1MiwxLjgwMy0wLjQ1Mmg4LjkxOGMxLjMyNiwwLDEuNjYzLDAuMjU3LDEuODAxLDAuNDUyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNDEyLDAuNTc1LDAuNjExLDEuNDk0LDAuNjExLDIuODExQy0zMzIyLjM3Ny'+
			'0yNTUzLjE5OS0zMzIyLjk1Ni0yNTUyLjM0MS0zMzIzLjExMS0yNTUyLjIxOHoiIGZpbGw9Im5vbmUiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIi8+Cjwvc3ZnPgo=';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.toggleVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['enter_vr']=true;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ontouchend=function (e) {
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_vr=document.createElement('div');
		els=me._tt_enter_vr__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_vr";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Enter VR";
		el.appendChild(els);
		me._tt_enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_vr.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._tt_enter_vr.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_enter_vr.style.top='-25px';
					me._tt_enter_vr.ggUpdatePosition(true);
				}
				else {
					me._tt_enter_vr.ggDx=0;
					me._tt_enter_vr.style.top='32px';
					me._tt_enter_vr.ggUpdatePosition(true);
				}
			}
		}
		me._tt_enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['enter_vr'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._tt_enter_vr.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_vr.style.visibility=(Number(me._tt_enter_vr.style.opacity)>0||!me._tt_enter_vr.style.opacity)?'inherit':'hidden';
					me._tt_enter_vr.ggVisible=true;
				}
				else {
					me._tt_enter_vr.style.visibility="hidden";
					me._tt_enter_vr.ggVisible=false;
				}
			}
		}
		me._tt_enter_vr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._enter_vr.appendChild(me._tt_enter_vr);
		me.divSkin.appendChild(me._enter_vr);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._information_bg=document.createElement('div');
		el.ggId="information_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(12,17,84,0.666667);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_bg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._information_bg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 276px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4x'+
			'LTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40'+
			'LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0w'+
			'LjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4x'+
			'LTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		me._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_popup_close);
		me.divSkin.appendChild(me._information);
		el=me._data=document.createElement('div');
		els=me._data__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="DATA";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 175px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 22px;';
		hs+='background: #005500;';
		hs+='border: 1px solid #005500;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="DATA: 2024.07.01";
		el.appendChild(els);
		me._data.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._data.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._data.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._data.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._data.style[domTransition]='' + cssPrefix + 'transform 0s, background-color 0s, border-color 0s';
				if (me._data.ggCurrentLogicStateScaling == 0) {
					me._data.ggParameter.sx = 0.8;
					me._data.ggParameter.sy = 8;
					me._data.style[domTransform]=parameterToTransform(me._data.ggParameter);
				}
				else {
					me._data.ggParameter.sx = 1;
					me._data.ggParameter.sy = 1;
					me._data.style[domTransform]=parameterToTransform(me._data.ggParameter);
				}
			}
		}
		me._data.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('SEMANA_PASSADA') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._data.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._data.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._data__text.style[domTransition]='' + cssPrefix + 'transform 0s, background-color 0s, border-color 0s';
				if (me._data.ggCurrentLogicStateBackgroundColor == 0) {
					me._data__text.style.backgroundColor="rgba(170,0,0,1)";
				}
				else {
					me._data__text.style.backgroundColor="rgba(0,85,0,1)";
				}
			}
		}
		me._data.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('SEMANA_PASSADA') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._data.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._data.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._data__text.style[domTransition]='' + cssPrefix + 'transform 0s, background-color 0s, border-color 0s';
				if (me._data.ggCurrentLogicStateBorderColor == 0) {
					me._data__text.style.borderColor="rgba(170,0,0,1)";
				}
				else {
					me._data__text.style.borderColor="rgba(0,85,0,1)";
				}
			}
		}
		me._data.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('SEMANA_PASSADA') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._data.ggCurrentLogicStateText != newLogicStateText) {
				me._data.ggCurrentLogicStateText = newLogicStateText;
				me._data.style[domTransition]='' + cssPrefix + 'transform 0s, background-color 0s, border-color 0s';
				if (me._data.ggCurrentLogicStateText == 0) {
					me._data.ggText="DATA: 2024.06.24";
					me._data__text.innerHTML=me._data.ggText;
					if (me._data.ggUpdateText) {
					me._data.ggUpdateText=function() {
						var hs="DATA: 2024.06.24";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._data.ggUpdatePosition) me._data.ggUpdatePosition();
					}
				}
				else {
					me._data.ggText="DATA: 2024.07.01";
					me._data__text.innerHTML=me._data.ggText;
					if (me._data.ggUpdateText) {
					me._data.ggUpdateText=function() {
						var hs="DATA: 2024.07.01";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._data.ggUpdatePosition) me._data.ggUpdatePosition();
					}
				}
			}
		}
		me._data.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._data);
		el=me._nivel_1=document.createElement('div');
		el.ggId="NIVEL 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 251px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 632px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nivel_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nivel_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nivel_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nivel_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nivel_1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._nivel_1.ggCurrentLogicStateScaling == 0) {
					me._nivel_1.ggParameter.sx = 0.7;
					me._nivel_1.ggParameter.sy = 0.7;
					me._nivel_1.style[domTransform]=parameterToTransform(me._nivel_1.ggParameter);
				}
				else {
					me._nivel_1.ggParameter.sx = 1;
					me._nivel_1.ggParameter.sy = 1;
					me._nivel_1.style[domTransform]=parameterToTransform(me._nivel_1.ggParameter);
				}
			}
		}
		me._nivel_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_40=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,61,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 244px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 628px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_40.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nivel_1.appendChild(me._rectangle_40);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=3;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 84.8606%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 94.6203%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nivel_1.appendChild(me._image_10);
		el=me._adm_4=document.createElement('div');
		el.ggId="ADM_4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #aa5500;';
		hs+='border : 1px solid #aa5500;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 131px;';
		hs+='position : absolute;';
		hs+='top : 102px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._adm_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._adm_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1)) && 
				((player.getVariableValue('activeRoom1A') == false)) && 
				((me.ggUserdata.title != "Room 1A"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._adm_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._adm_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._adm_4.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._adm_4.ggCurrentLogicStateScaling == 0) {
					me._adm_4.ggParameter.sx = 0.8;
					me._adm_4.ggParameter.sy = 0.8;
					me._adm_4.style[domTransform]=parameterToTransform(me._adm_4.ggParameter);
				}
				else {
					me._adm_4.ggParameter.sx = 1;
					me._adm_4.ggParameter.sy = 1;
					me._adm_4.style[domTransform]=parameterToTransform(me._adm_4.ggParameter);
				}
			}
		}
		me._adm_4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Ponto6') == true)) || 
				((me.ggUserdata.title == "ADM_4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._adm_4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._adm_4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._adm_4.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._adm_4.ggCurrentLogicStateBackgroundColor == 0) {
					me._adm_4.style.backgroundColor="rgba(0,255,0,1)";
				}
				else {
					me._adm_4.style.backgroundColor="rgba(170,85,0,1)";
				}
			}
		}
		me._adm_4.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node18}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node27}","$(cur)");
			}
			player.setVariableValue('Ponto6', true);
			player.setVariableValue('Ponto1', false);
			player.setVariableValue('Ponto2', false);
			player.setVariableValue('Ponto3', false);
			player.setVariableValue('Ponto4', false);
			player.setVariableValue('Ponto5', false);
			player.setVariableValue('Ponto7', false);
			player.setVariableValue('Ponto8', false);
			player.setVariableValue('Ponto9', false);
		}
		me._adm_4.onmouseover=function (e) {
			me.elementMouseOver['adm_4']=true;
			me._texto_adm_4.logicBlock_visible();
		}
		me._adm_4.onmouseout=function (e) {
			me.elementMouseOver['adm_4']=false;
			me._texto_adm_4.logicBlock_visible();
		}
		me._adm_4.ontouchend=function (e) {
			me.elementMouseOver['adm_4']=false;
			me._texto_adm_4.logicBlock_visible();
		}
		me._adm_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_adm_4=document.createElement('div');
		els=me._texto_adm_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto_ADM_4";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='background: #aa5500;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ADM_4";
		el.appendChild(els);
		me._texto_adm_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_adm_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['adm_4'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_adm_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_adm_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_adm_4.style[domTransition]='';
				if (me._texto_adm_4.ggCurrentLogicStateVisible == 0) {
					me._texto_adm_4.style.visibility=(Number(me._texto_adm_4.style.opacity)>0||!me._texto_adm_4.style.opacity)?'inherit':'hidden';
					me._texto_adm_4.ggVisible=true;
				}
				else {
					me._texto_adm_4.style.visibility="hidden";
					me._texto_adm_4.ggVisible=false;
				}
			}
		}
		me._texto_adm_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._adm_4.appendChild(me._texto_adm_4);
		me._nivel_1.appendChild(me._adm_4);
		el=me._adm_5=document.createElement('div');
		el.ggId="ADM_5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #aa5500;';
		hs+='border : 1px solid #aa5500;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 179px;';
		hs+='position : absolute;';
		hs+='top : 101px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._adm_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._adm_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1)) && 
				((player.getVariableValue('activeRoom1B') == false)) && 
				((me.ggUserdata.title != "Room 1B"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._adm_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._adm_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._adm_5.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._adm_5.ggCurrentLogicStateScaling == 0) {
					me._adm_5.ggParameter.sx = 0.8;
					me._adm_5.ggParameter.sy = 0.8;
					me._adm_5.style[domTransform]=parameterToTransform(me._adm_5.ggParameter);
				}
				else {
					me._adm_5.ggParameter.sx = 1;
					me._adm_5.ggParameter.sy = 1;
					me._adm_5.style[domTransform]=parameterToTransform(me._adm_5.ggParameter);
				}
			}
		}
		me._adm_5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Ponto7') == true)) || 
				((me.ggUserdata.title == "ADM_5"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._adm_5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._adm_5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._adm_5.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._adm_5.ggCurrentLogicStateBackgroundColor == 0) {
					me._adm_5.style.backgroundColor="rgba(0,255,0,1)";
				}
				else {
					me._adm_5.style.backgroundColor="rgba(170,85,0,1)";
				}
			}
		}
		me._adm_5.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node17}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node28}","$(cur)");
			}
			player.setVariableValue('Ponto7', true);
			player.setVariableValue('Ponto1', false);
			player.setVariableValue('Ponto2', false);
			player.setVariableValue('Ponto3', false);
			player.setVariableValue('Ponto4', false);
			player.setVariableValue('Ponto6', false);
			player.setVariableValue('Ponto8', false);
			player.setVariableValue('Ponto9', false);
		}
		me._adm_5.onmouseover=function (e) {
			me.elementMouseOver['adm_5']=true;
			me._texto_adm_5.logicBlock_visible();
		}
		me._adm_5.onmouseout=function (e) {
			me.elementMouseOver['adm_5']=false;
			me._texto_adm_5.logicBlock_visible();
		}
		me._adm_5.ontouchend=function (e) {
			me.elementMouseOver['adm_5']=false;
			me._texto_adm_5.logicBlock_visible();
		}
		me._adm_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_adm_5=document.createElement('div');
		els=me._texto_adm_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto_ADM_5";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='background: #aa5500;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ADM_5";
		el.appendChild(els);
		me._texto_adm_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_adm_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['adm_5'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_adm_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_adm_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_adm_5.style[domTransition]='';
				if (me._texto_adm_5.ggCurrentLogicStateVisible == 0) {
					me._texto_adm_5.style.visibility=(Number(me._texto_adm_5.style.opacity)>0||!me._texto_adm_5.style.opacity)?'inherit':'hidden';
					me._texto_adm_5.ggVisible=true;
				}
				else {
					me._texto_adm_5.style.visibility="hidden";
					me._texto_adm_5.ggVisible=false;
				}
			}
		}
		me._texto_adm_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._adm_5.appendChild(me._texto_adm_5);
		me._nivel_1.appendChild(me._adm_5);
		el=me._adm_1=document.createElement('div');
		el.ggId="ADM_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #aa5500;';
		hs+='border : 1px solid #aa5500;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 177px;';
		hs+='position : absolute;';
		hs+='top : 184px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._adm_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._adm_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1)) && 
				((player.getVariableValue('activeRoom1C') == false)) && 
				((me.ggUserdata.title != "Room 1C"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._adm_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._adm_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._adm_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._adm_1.ggCurrentLogicStateScaling == 0) {
					me._adm_1.ggParameter.sx = 0.8;
					me._adm_1.ggParameter.sy = 0.8;
					me._adm_1.style[domTransform]=parameterToTransform(me._adm_1.ggParameter);
				}
				else {
					me._adm_1.ggParameter.sx = 1;
					me._adm_1.ggParameter.sy = 1;
					me._adm_1.style[domTransform]=parameterToTransform(me._adm_1.ggParameter);
				}
			}
		}
		me._adm_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Ponto3') == true)) || 
				((me.ggUserdata.title == "ADM_1"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._adm_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._adm_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._adm_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._adm_1.ggCurrentLogicStateBackgroundColor == 0) {
					me._adm_1.style.backgroundColor="rgba(0,255,0,1)";
				}
				else {
					me._adm_1.style.backgroundColor="rgba(170,85,0,1)";
				}
			}
		}
		me._adm_1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node12}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node29}","$(cur)");
			}
			player.setVariableValue('Ponto3', true);
			player.setVariableValue('Ponto1', false);
			player.setVariableValue('Ponto2', false);
			player.setVariableValue('Ponto4', false);
			player.setVariableValue('Ponto5', false);
			player.setVariableValue('Ponto6', false);
			player.setVariableValue('Ponto7', false);
			player.setVariableValue('Ponto8', false);
			player.setVariableValue('Ponto9', false);
		}
		me._adm_1.onmouseover=function (e) {
			me.elementMouseOver['adm_1']=true;
			me._texto_adm_1.logicBlock_visible();
		}
		me._adm_1.onmouseout=function (e) {
			me.elementMouseOver['adm_1']=false;
			me._texto_adm_1.logicBlock_visible();
		}
		me._adm_1.ontouchend=function (e) {
			me.elementMouseOver['adm_1']=false;
			me._texto_adm_1.logicBlock_visible();
		}
		me._adm_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_adm_1=document.createElement('div');
		els=me._texto_adm_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto_ADM_1";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='background: #aa5500;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ADM_1";
		el.appendChild(els);
		me._texto_adm_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_adm_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['adm_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_adm_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_adm_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_adm_1.style[domTransition]='';
				if (me._texto_adm_1.ggCurrentLogicStateVisible == 0) {
					me._texto_adm_1.style.visibility=(Number(me._texto_adm_1.style.opacity)>0||!me._texto_adm_1.style.opacity)?'inherit':'hidden';
					me._texto_adm_1.ggVisible=true;
				}
				else {
					me._texto_adm_1.style.visibility="hidden";
					me._texto_adm_1.ggVisible=false;
				}
			}
		}
		me._texto_adm_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._adm_1.appendChild(me._texto_adm_1);
		me._nivel_1.appendChild(me._adm_1);
		el=me._parking_2=document.createElement('div');
		el.ggId="PARKING_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #aa5500;';
		hs+='border : 1px solid #aa5500;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 230px;';
		hs+='position : absolute;';
		hs+='top : 188px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._parking_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._parking_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1)) && 
				((player.getVariableValue('activeRoom2A') == false)) && 
				((me.ggUserdata.title != "Room 2A"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._parking_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._parking_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._parking_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._parking_2.ggCurrentLogicStateScaling == 0) {
					me._parking_2.ggParameter.sx = 0.8;
					me._parking_2.ggParameter.sy = 0.8;
					me._parking_2.style[domTransform]=parameterToTransform(me._parking_2.ggParameter);
				}
				else {
					me._parking_2.ggParameter.sx = 1;
					me._parking_2.ggParameter.sy = 1;
					me._parking_2.style[domTransform]=parameterToTransform(me._parking_2.ggParameter);
				}
			}
		}
		me._parking_2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Ponto2') == true)) || 
				((me.ggUserdata.title == "PARKING_2"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._parking_2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._parking_2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._parking_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._parking_2.ggCurrentLogicStateBackgroundColor == 0) {
					me._parking_2.style.backgroundColor="rgba(0,255,0,1)";
				}
				else {
					me._parking_2.style.backgroundColor="rgba(170,85,0,1)";
				}
			}
		}
		me._parking_2.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node11}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node24}","$(cur)");
			}
			player.setVariableValue('Ponto2', true);
			player.setVariableValue('Ponto1', false);
			player.setVariableValue('Ponto3', false);
			player.setVariableValue('Ponto4', false);
			player.setVariableValue('Ponto5', false);
			player.setVariableValue('Ponto6', false);
			player.setVariableValue('Ponto7', false);
			player.setVariableValue('Ponto8', false);
			player.setVariableValue('Ponto9', false);
		}
		me._parking_2.onmouseover=function (e) {
			me.elementMouseOver['parking_2']=true;
			me._texto_parking_2.logicBlock_visible();
		}
		me._parking_2.onmouseout=function (e) {
			me.elementMouseOver['parking_2']=false;
			me._texto_parking_2.logicBlock_visible();
		}
		me._parking_2.ontouchend=function (e) {
			me.elementMouseOver['parking_2']=false;
			me._texto_parking_2.logicBlock_visible();
		}
		me._parking_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_parking_2=document.createElement('div');
		els=me._texto_parking_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto_PARKING_2";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='background: #aa5500;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="PARKING_2";
		el.appendChild(els);
		me._texto_parking_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_parking_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['parking_2'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_parking_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_parking_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_parking_2.style[domTransition]='';
				if (me._texto_parking_2.ggCurrentLogicStateVisible == 0) {
					me._texto_parking_2.style.visibility=(Number(me._texto_parking_2.style.opacity)>0||!me._texto_parking_2.style.opacity)?'inherit':'hidden';
					me._texto_parking_2.ggVisible=true;
				}
				else {
					me._texto_parking_2.style.visibility="hidden";
					me._texto_parking_2.ggVisible=false;
				}
			}
		}
		me._texto_parking_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._parking_2.appendChild(me._texto_parking_2);
		me._nivel_1.appendChild(me._parking_2);
		el=me._parking_1=document.createElement('div');
		el.ggId="PARKING_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #aa5500;';
		hs+='border : 1px solid #aa5500;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 229px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._parking_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._parking_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1)) && 
				((player.getVariableValue('activeRoom2B') == false)) && 
				((me.ggUserdata.title != "Room 2B"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._parking_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._parking_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._parking_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._parking_1.ggCurrentLogicStateScaling == 0) {
					me._parking_1.ggParameter.sx = 0.8;
					me._parking_1.ggParameter.sy = 0.8;
					me._parking_1.style[domTransform]=parameterToTransform(me._parking_1.ggParameter);
				}
				else {
					me._parking_1.ggParameter.sx = 1;
					me._parking_1.ggParameter.sy = 1;
					me._parking_1.style[domTransform]=parameterToTransform(me._parking_1.ggParameter);
				}
			}
		}
		me._parking_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Ponto1') == true)) || 
				((me.ggUserdata.title == "PARKING_1"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._parking_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._parking_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._parking_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._parking_1.ggCurrentLogicStateBackgroundColor == 0) {
					me._parking_1.style.backgroundColor="rgba(0,255,0,1)";
				}
				else {
					me._parking_1.style.backgroundColor="rgba(170,85,0,1)";
				}
			}
		}
		me._parking_1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node9}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node23}","$(cur)");
			}
			player.setVariableValue('Ponto1', true);
			player.setVariableValue('Ponto2', false);
			player.setVariableValue('Ponto3', false);
			player.setVariableValue('Ponto4', false);
			player.setVariableValue('Ponto5', false);
			player.setVariableValue('Ponto6', false);
			player.setVariableValue('Ponto7', false);
			player.setVariableValue('Ponto8', false);
			player.setVariableValue('Ponto9', false);
		}
		me._parking_1.onmouseover=function (e) {
			me.elementMouseOver['parking_1']=true;
			me._texto_parking_1.logicBlock_visible();
		}
		me._parking_1.onmouseout=function (e) {
			me.elementMouseOver['parking_1']=false;
			me._texto_parking_1.logicBlock_visible();
		}
		me._parking_1.ontouchend=function (e) {
			me.elementMouseOver['parking_1']=false;
			me._texto_parking_1.logicBlock_visible();
		}
		me._parking_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_parking_1=document.createElement('div');
		els=me._texto_parking_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto_PARKING_1";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='background: #aa5500;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="PARKING_1";
		el.appendChild(els);
		me._texto_parking_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_parking_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['parking_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_parking_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_parking_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_parking_1.style[domTransition]='';
				if (me._texto_parking_1.ggCurrentLogicStateVisible == 0) {
					me._texto_parking_1.style.visibility=(Number(me._texto_parking_1.style.opacity)>0||!me._texto_parking_1.style.opacity)?'inherit':'hidden';
					me._texto_parking_1.ggVisible=true;
				}
				else {
					me._texto_parking_1.style.visibility="hidden";
					me._texto_parking_1.ggVisible=false;
				}
			}
		}
		me._texto_parking_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._parking_1.appendChild(me._texto_parking_1);
		me._nivel_1.appendChild(me._parking_1);
		el=me._adm_3=document.createElement('div');
		el.ggId="ADM_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #aa5500;';
		hs+='border : 1px solid #aa5500;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 73px;';
		hs+='position : absolute;';
		hs+='top : 102px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._adm_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._adm_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1)) && 
				((player.getVariableValue('activeRoom1A') == false)) && 
				((me.ggUserdata.title != "Room 1A"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._adm_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._adm_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._adm_3.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._adm_3.ggCurrentLogicStateScaling == 0) {
					me._adm_3.ggParameter.sx = 0.8;
					me._adm_3.ggParameter.sy = 0.8;
					me._adm_3.style[domTransform]=parameterToTransform(me._adm_3.ggParameter);
				}
				else {
					me._adm_3.ggParameter.sx = 1;
					me._adm_3.ggParameter.sy = 1;
					me._adm_3.style[domTransform]=parameterToTransform(me._adm_3.ggParameter);
				}
			}
		}
		me._adm_3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Ponto5') == true)) || 
				((me.ggUserdata.title == "ADM_3"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._adm_3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._adm_3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._adm_3.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._adm_3.ggCurrentLogicStateBackgroundColor == 0) {
					me._adm_3.style.backgroundColor="rgba(0,255,0,1)";
				}
				else {
					me._adm_3.style.backgroundColor="rgba(170,85,0,1)";
				}
			}
		}
		me._adm_3.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node16}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node26}","$(cur)");
			}
			player.setVariableValue('Ponto5', true);
			player.setVariableValue('Ponto1', false);
			player.setVariableValue('Ponto2', false);
			player.setVariableValue('Ponto3', false);
			player.setVariableValue('Ponto4', false);
			player.setVariableValue('Ponto6', false);
			player.setVariableValue('Ponto7', false);
			player.setVariableValue('Ponto8', false);
			player.setVariableValue('Ponto9', false);
		}
		me._adm_3.onmouseover=function (e) {
			me.elementMouseOver['adm_3']=true;
			me._texto_adm_3.logicBlock_visible();
		}
		me._adm_3.onmouseout=function (e) {
			me.elementMouseOver['adm_3']=false;
			me._texto_adm_3.logicBlock_visible();
		}
		me._adm_3.ontouchend=function (e) {
			me.elementMouseOver['adm_3']=false;
			me._texto_adm_3.logicBlock_visible();
		}
		me._adm_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_adm_3=document.createElement('div');
		els=me._texto_adm_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto_ADM_3";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='background: #aa5500;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ADM_3";
		el.appendChild(els);
		me._texto_adm_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_adm_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['adm_3'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_adm_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_adm_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_adm_3.style[domTransition]='';
				if (me._texto_adm_3.ggCurrentLogicStateVisible == 0) {
					me._texto_adm_3.style.visibility=(Number(me._texto_adm_3.style.opacity)>0||!me._texto_adm_3.style.opacity)?'inherit':'hidden';
					me._texto_adm_3.ggVisible=true;
				}
				else {
					me._texto_adm_3.style.visibility="hidden";
					me._texto_adm_3.ggVisible=false;
				}
			}
		}
		me._texto_adm_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._adm_3.appendChild(me._texto_adm_3);
		me._nivel_1.appendChild(me._adm_3);
		el=me._adm_2=document.createElement('div');
		el.ggId="ADM_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #aa5500;';
		hs+='border : 1px solid #aa5500;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 132px;';
		hs+='position : absolute;';
		hs+='top : 184px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._adm_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._adm_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1)) && 
				((player.getVariableValue('activeRoom1A') == false)) && 
				((me.ggUserdata.title != "Room 1A"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._adm_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._adm_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._adm_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._adm_2.ggCurrentLogicStateScaling == 0) {
					me._adm_2.ggParameter.sx = 0.8;
					me._adm_2.ggParameter.sy = 0.8;
					me._adm_2.style[domTransform]=parameterToTransform(me._adm_2.ggParameter);
				}
				else {
					me._adm_2.ggParameter.sx = 1;
					me._adm_2.ggParameter.sy = 1;
					me._adm_2.style[domTransform]=parameterToTransform(me._adm_2.ggParameter);
				}
			}
		}
		me._adm_2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Ponto4') == true)) || 
				((me.ggUserdata.title == "ADM_2"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._adm_2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._adm_2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._adm_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._adm_2.ggCurrentLogicStateBackgroundColor == 0) {
					me._adm_2.style.backgroundColor="rgba(0,255,0,1)";
				}
				else {
					me._adm_2.style.backgroundColor="rgba(170,85,0,1)";
				}
			}
		}
		me._adm_2.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node30}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node30}","$(cur)");
			}
			player.setVariableValue('Ponto4', true);
			player.setVariableValue('Ponto1', false);
			player.setVariableValue('Ponto2', false);
			player.setVariableValue('Ponto3', false);
			player.setVariableValue('Ponto5', false);
			player.setVariableValue('Ponto6', false);
			player.setVariableValue('Ponto7', false);
			player.setVariableValue('Ponto8', false);
			player.setVariableValue('Ponto9', false);
		}
		me._adm_2.onmouseover=function (e) {
			me.elementMouseOver['adm_2']=true;
			me._texto_adm_2.logicBlock_visible();
		}
		me._adm_2.onmouseout=function (e) {
			me.elementMouseOver['adm_2']=false;
			me._texto_adm_2.logicBlock_visible();
		}
		me._adm_2.ontouchend=function (e) {
			me.elementMouseOver['adm_2']=false;
			me._texto_adm_2.logicBlock_visible();
		}
		me._adm_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_adm_2=document.createElement('div');
		els=me._texto_adm_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto_ADM_2";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='background: #aa5500;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="ADM_2";
		el.appendChild(els);
		me._texto_adm_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_adm_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['adm_2'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_adm_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_adm_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_adm_2.style[domTransition]='';
				if (me._texto_adm_2.ggCurrentLogicStateVisible == 0) {
					me._texto_adm_2.style.visibility=(Number(me._texto_adm_2.style.opacity)>0||!me._texto_adm_2.style.opacity)?'inherit':'hidden';
					me._texto_adm_2.ggVisible=true;
				}
				else {
					me._texto_adm_2.style.visibility="hidden";
					me._texto_adm_2.ggVisible=false;
				}
			}
		}
		me._texto_adm_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._adm_2.appendChild(me._texto_adm_2);
		me._nivel_1.appendChild(me._adm_2);
		me.divSkin.appendChild(me._nivel_1);
		el=me._botao_nivel_2=document.createElement('div');
		els=me._botao_nivel_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="BOTAO - NIVEL 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 102px;';
		hs+='height: 22px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="NIVEL 2<br\/>";
		el.appendChild(els);
		me._botao_nivel_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._botao_nivel_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._botao_nivel_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._botao_nivel_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._botao_nivel_2.style[domTransition]='' + cssPrefix + 'transform 0s, background-color 500ms ease 0ms, color 500ms ease 0ms';
				if (me._botao_nivel_2.ggCurrentLogicStateScaling == 0) {
					me._botao_nivel_2.ggParameter.sx = 0.8;
					me._botao_nivel_2.ggParameter.sy = 8;
					me._botao_nivel_2.style[domTransform]=parameterToTransform(me._botao_nivel_2.ggParameter);
				}
				else {
					me._botao_nivel_2.ggParameter.sx = 1;
					me._botao_nivel_2.ggParameter.sy = 1;
					me._botao_nivel_2.style[domTransform]=parameterToTransform(me._botao_nivel_2.ggParameter);
				}
			}
		}
		me._botao_nivel_2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('B2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._botao_nivel_2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._botao_nivel_2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._botao_nivel_2__text.style[domTransition]='' + cssPrefix + 'transform 0s, background-color 500ms ease 0ms, color 500ms ease 0ms';
				if (me._botao_nivel_2.ggCurrentLogicStateBackgroundColor == 0) {
					me._botao_nivel_2__text.style.backgroundColor="rgba(170,85,0,1)";
				}
				else {
					me._botao_nivel_2__text.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._botao_nivel_2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('B2') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._botao_nivel_2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._botao_nivel_2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._botao_nivel_2__text.style[domTransition]='' + cssPrefix + 'transform 0s, background-color 500ms ease 0ms, color 500ms ease 0ms';
				if (me._botao_nivel_2.ggCurrentLogicStateTextColor == 0) {
					me._botao_nivel_2__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._botao_nivel_2__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._botao_nivel_2.onclick=function (e) {
			me._nivel_2.ggVisible = !me._nivel_2.ggVisible;
			var flag=me._nivel_2.ggVisible;
			me._nivel_2.style[domTransition]='none';
			me._nivel_2.style.visibility=((flag)&&(Number(me._nivel_2.style.opacity)>0||!me._nivel_2.style.opacity))?'inherit':'hidden';
			player.setVariableValue('B2', !player.getVariableValue('B2'));
			player.setVariableValue('B1', false);
			me._nivel_1.style[domTransition]='none';
			me._nivel_1.style.visibility='hidden';
			me._nivel_1.ggVisible=false;
		}
		me._botao_nivel_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._botao_nivel_2);
		el=me._botao_nivel_1=document.createElement('div');
		els=me._botao_nivel_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="BOTAO - NIVEL 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 102px;';
		hs+='height: 22px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="NIVEL 1<br\/>";
		el.appendChild(els);
		me._botao_nivel_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._botao_nivel_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._botao_nivel_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._botao_nivel_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._botao_nivel_1.style[domTransition]='' + cssPrefix + 'transform 0s, background-color 500ms ease 0ms, color 500ms ease 0ms';
				if (me._botao_nivel_1.ggCurrentLogicStateScaling == 0) {
					me._botao_nivel_1.ggParameter.sx = 0.8;
					me._botao_nivel_1.ggParameter.sy = 8;
					me._botao_nivel_1.style[domTransform]=parameterToTransform(me._botao_nivel_1.ggParameter);
				}
				else {
					me._botao_nivel_1.ggParameter.sx = 1;
					me._botao_nivel_1.ggParameter.sy = 1;
					me._botao_nivel_1.style[domTransform]=parameterToTransform(me._botao_nivel_1.ggParameter);
				}
			}
		}
		me._botao_nivel_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('B1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._botao_nivel_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._botao_nivel_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._botao_nivel_1__text.style[domTransition]='' + cssPrefix + 'transform 0s, background-color 500ms ease 0ms, color 500ms ease 0ms';
				if (me._botao_nivel_1.ggCurrentLogicStateBackgroundColor == 0) {
					me._botao_nivel_1__text.style.backgroundColor="rgba(170,85,0,1)";
				}
				else {
					me._botao_nivel_1__text.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._botao_nivel_1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('B1') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._botao_nivel_1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._botao_nivel_1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._botao_nivel_1__text.style[domTransition]='' + cssPrefix + 'transform 0s, background-color 500ms ease 0ms, color 500ms ease 0ms';
				if (me._botao_nivel_1.ggCurrentLogicStateTextColor == 0) {
					me._botao_nivel_1__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._botao_nivel_1__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._botao_nivel_1.onclick=function (e) {
			me._nivel_1.ggVisible = !me._nivel_1.ggVisible;
			var flag=me._nivel_1.ggVisible;
			me._nivel_1.style[domTransition]='none';
			me._nivel_1.style.visibility=((flag)&&(Number(me._nivel_1.style.opacity)>0||!me._nivel_1.style.opacity))?'inherit':'hidden';
			player.setVariableValue('B1', !player.getVariableValue('B1'));
			player.setVariableValue('B2', false);
			me._nivel_2.style[domTransition]='none';
			me._nivel_2.style.visibility='hidden';
			me._nivel_2.ggVisible=false;
		}
		me._botao_nivel_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._botao_nivel_1);
		el=me._atras=document.createElement('div');
		els=me._atras__img=document.createElement('img');
		els.className='ggskin ggskin_atras';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4nO3dafiu9bj/8fdZaR5UmkypDJnbLc1UKklFhpIxJLNt9jdts23M2DbLmJRmoZCIqJTpT202NhlSiUqDprXO/eBaqKzV+v3u6byG9+s41pFHrffRk+/H/b3u+4rMRJLULxGxFnBfYIvF/7wNsPriP6vd6H+vBFwCXARceLN//ho4IzMvm3W/pi8cAJLUbRERwHbAbjQH/hbAJhP61ydwLnD63/9k5vkT+nerkANAkjroRof+fsC+wO1n+Nf/HjgO+Ghm/mSGf68myAEgSR0SEfcDngA8itke+ktzFvBR4IjMvKo6RnPnAJCkDoiIbYDXAXsUpyzNFcDngA9m5o+qY7RsDgBJarGI2Ap4PfCQ6pY5SuAw4BWZ+YfqGC2dA0CSWigitgTeAO'+
			'xV3TKiq4F3AG/PzKurY/SvHACS1CIRcSuaj/pfDixXWzMRfwBeARyWHjit4gCQpJaIiM2BzwJbVrdMwXeB/TPz99UhavRhXUpSp0XjucAP6OfhD7A98IOI2LU6RA0HgCQVioiNgJOAQ4BVinOmbT3gqxHxysW/Y6BCXgFIUpGI2A44BtiouqXAicAB/sxwHT8BkKQCEXEQ8E2GefgDPBQ4JyI2rQ4ZKj8BkKQZWvyU/3uAZ1e3tMT5wI6Z+dvqkKFxAEjSjETE+sDRwAOqW1rmVzQj4ILqkCHxCkCSZiAiFgDn4OG/JJsBX4+IDapDhsQBIElTFhFPoHmV7h2qW1psc+CUiFi3OmQoHACSNCURsXxEvBP4DLBydU8H3As4KSJWrA4ZAgeAJE1BRKwDnAy8qLqlY7YC3l4dMQQ+BChJExYR9waOB/yK2+gemplfrI7o'+
			'MweAJE1QROwLfBJYrTil6y4BtvCVwtPjFYAkTUBELBcRbwKOwsN/Em4DHBYRnlNT4n9YSRpTRKwFfAF4VXVLz+wMvLI6oq+8ApCkMSx+he/xwN2qW3rqWuCu/lLg5PkJgCSNKCL2Bs7Cw3+aVgLeUB3RR34CIEnztPhVtq+iOZh8re30LaJ5IPAn1SF94icAkjQPEbE6zYN+b8TDf1aWA95aHdE3fgIgSXMUEZvR3Pffq7ploHbOzNOqI/rCTwAkaQ4i4kHA9/Dwr/S26oA+cQBI0jJExEuAk4B1qlsGbpvFb1XUBDgAJGkpImKViPgs8A5g+eoeAfDE6oC+8BkASVqCiLgjcBywZXWLbuJi4HaZeUN1SNf5CYAk3UxE7AScg4d/G60P7FEd0QcOAEm6kYh4DnAKsF51i5bKa4AJ8ApAkoCIWAn4AHBgdYuW6Rpgw8'+
			'y8vDqky/wEQNLgRcRGwDfx8O+KlYGHVEd0nQNA0qBFxLbA94Ftq1s0L9tVB3SdA0DSYEXEU4HTgI2qWzRvDrYx+QyApMGJiBWA9wDPqW7RyK4D1szMa6tDuspPACQNSkSsB3wdD/+uWxG/pjkWB4CkwYiILWm+379jdYsmwmuAMTgAJA1CRDweOB24Y3WLJsYBMAYHgKRei4jlI+Jg4DBgleoeTdQm1QFdtkJ1gCRNS0SsAxwBPKi6RVOxbnVAlzkAJPVSRNwLOAHYtLpFU+PrmcfgFYCk3omIRwFn4OHfd2tFhK9pHpEDQFJvROONwFHA6tU9mroA1q6O6CqvACT1QkSsCXwW2Lu6RTO1DnBJdUQXOQAkdV5E3I3mvv9u1S2aOZ8DGJFXAJI6LSL2As7Cw3+oVq4O6CoHgKTOiohXAV8A1qpukbrGKwBJnRMRqwGf'+
			'BPYtTpE6ywEgqVMiYlPgeODe1S1Sl3kFIKkzImI34Gw8/KWxOQAkdUJEvAg4GZ/6libCKwBJrRYRqwAfBR5f3SL1iQNAUmtFxB2A44AF1S1S33gFIKmVImJH4Bw8/KWpcABIap2IeDZwCrB+dYvUV14BSGqNiFgReD9wUHWL1HcOAEmtEBEbAccA21W3SEPgAJBULiK2AY4FblvdIg2FzwBIKhURBwKn4eEvzZQDQFKJiFghIg4BDgVWqu6RhsYrAEkzFxHrAUcBO1W3SEPlAJA0UxHxbzQv87ljdYs0ZF4BSJqZiHgc8B08/KVyDgBJUxcRy0fEO4DPAqtU90jyCkDSlEXE2sARwO7VLZL+yQEgaWoi4l409/2bVbdIuimvACRNRUQ8EjgDD3+plRwAkiYqGm8AjgZWr+6RtGReAUiamIhYEzgMeGh1i6Rb5gCQNB'+
			'ERcVfgBGDz6hZJy+YVgKSxRcSewPfw8Jc6wwEgaSwR8UrgRGCt6hZJc+cVgKSRRMRqwCeA/apbJM2fA0DSvEXEJjTf779PdYuk0XgFIGleImJX4Bw8/KVOcwBImrOIeCHwFWCd6hZJ4/EKQNIyRcTKwEeAJ1a3SJoMB4CkWxQRdwCOAxZUt0iaHK8AJC1VRDyA5r7fw1/qGQeApCWKiGcBXwfWr26RNHleAUi6iYhYEfgv4GnVLZKmxwEg6R8iYkPgGGD76hZJ0+UAkARARGxN87DfbatbJE2fzwBIIiKeDHwLD39pMBwA0oBFxAoR8T6a3/RfqbpH0ux4BSANVETcBjgK2Lk4RVIBB4A0QBGxBc3LfDaubpFUwysAaWAi4jHAd/DwlwbNASANREQsFxFvAz4HrFrdI6mWVwDSAETE2jQH/4OrWyS1gwNA6rmIuCfN'+
			'ff+dq1sktYdXAFKPRcQjgDPx8Jd0Mw4AqYei8Xqan/VdvbpHUvt4BSD1TESsARwGPKy6RVJ7OQCkHomIuwAnAHevbpHUbl4BSD0REQ8BzsbDX9IcOACkHoiIVwBfBNaqbpHUDV4BSB0WEavSvMjn0dUtkrrFASB1VERsQvP9/vtUt0jqHq8ApA6KiF1o7vs9/CWNxAEgdUxEvAD4KrBudYuk7vIKQOqIiFgZ+DBwQHWLpO5zAEgdEBG3B44D7lfdIqkfvAKQWi4i7g+cg4e/pAlyAEgtFhHPBE4FNqhukdQvXgFILRQRKwKHAE+vbpHUTw4AqWUiYkOat/htX90iqb8cAFKLRMTWwLHA7apbJPWbzwBILRERTwK+hYe/pBlwAEjFImKFiHgv8ElgpeIcSQPhFYBUKCJuA3weeGB1i6RhcQBIRSJiC5of97lTcYqkAf'+
			'IKQCoQEfsD38HDX1IRB4A0QxGxXES8FTgCWLW6R9JweQUgzUhE3Br4HLBHdYskOQCkGYiIewAnAHeubpEk8ApAmrqIeDhwJh7+klrEASBNSTReR/PLfmsU50jSTXgFIE1BRKwBfAbYp7pFkpbEASBNWETcBTgeuEd1iyQtjVcA0gRFxB7A9/Dwl9RyDgBpQiLiZcCXgFtXt0jSsngFII0pIlYFPg7sX90iSXPlAJDGEBF3ornvv29tiSTNj1cA0ogiYhfgHDz8JXWQA0AaQUQ8H/gKsG51iySNwisAaR4iYmXgQ8CTqlskaRwOAGmOIuJ2wHHAVtUtkjQurwCkOYiIHYDv4+EvqSccANIyRMTTgW8AG1S3SNKkeAUgLUVE3Ao4BHhGdYskTZoDQFqCiNgAOAbYobpFkqbBASDdTERsRfMK39tXt0jStPgMgHQjEXEA'+
			'8C08/CX1nANAAiJihYh4D/ApYOXqHkmaNq8ANHgRsS7weWCX6hZJmhUHgAYtIu5L8zKfOxWnSNJMeQWgwYqIRwPfxcNf0gA5ADQ4EbFcRLwFOBJYtbpHkip4BaBBiYhbA4cDD6lukaRKDgANRkTcHTgBuEt1iyRV8wpAgxAR+wBn4eEvSYADQD0XjdfSvMZ3jeoeSWoLrwDUWxGxBvBp4OHVLZLUNg4A9VJE3Jnmvv8e1S2S1EZeAah3ImIP4Gw8/CVpqRwA6pWI+H/Al4BbV7dIUpt5BaBeiIhVgUOBx1S3SFIXOADUeRGxMc3v+W9R3SJJXeEVgDotIh4InIOHvyTNiwNAnRURzwO+CtymukWSusYrAHVORKwEfAh4cnGKJHWWA0CdEhG3A44Ftq5ukaQu8wpAnRER29Pc93v4S9KYHADqhIh4GvANYMPqFknqA6'+
			'8A1GoRcSvgfcAzq1skqU8cAGqtiNgAOBq4f3WLJPWNA0CtFBH3o3mF7+2rWySpj3wGQK0TEU8Evo2HvyRNjQNArRERy0fEu4BPAytX90hSn3kFoFaIiHWBI4Fdq1skaQgcACoXEfeheZnPJtUtkjQUXgGoVETsB3wXD39JmikHgEpExHIR8Wbg88Bq1T2SNDReAWjmImIt4HBgz+oWSRoqB4BmKiLuTnPff9fqFkkaMq8ANDMR8TDgTDz8JamcA0BTF43X0Pw//zWreyRJXgFoyiJidZof9nlEdYsk6Z8cAJqaiNgMOAG4Z3WLJOmmvALQVETEg4Gz8fCXpFZyAGjiIuKlwJeBtatbJElL5hWAJiYiVgEOBR5b3SJJumUOAE1ERGwMHAf8W3WLJGnZvALQ2CJiZ5r7fg9/SeoIB4DGEhH/DnwNWK+6RZI0d14BaCQR'+
			'sRLwQeAp1S2SpPlzAGjeIuK2wLHANtUtkqTReAWgeYmI7YDv4+EvSZ3mANCcRcRBwDeBDYtTJEljcgBomSLiVhHxAeCjwIrVPZKk8fkMgG5RRKwPHA08oLpFkjQ5DgAtVUQsoPlxnztUt0iSJssrAC1RRDwBOB0Pf0nqJQeAbiIilo+IdwKfAVau7pEkTYdXAPqHiFgHOBLYrbpFkjRdDgABEBH3Bk4ANqlukSRNn1cAIiL2Bc7Aw1+SBsMBMGARsVxE/CdwFLBadY8kaXa8AhioiFgL+CywV3WLJGn2HAADFBGbA8cDd6tukSTV8ApgYCLiocBZePhL0qA5AAYiGv9B86T/mtU9kqRaXgEMQESsDnwKeGR1iySpHRwAPRcRm9Hc99+rukWS1B5eAfRYROwOnI2HvyTpZhwAPRURLwG+DKxd3SJJah+vAHomIlYBPg'+
			'Y8rrpFktReDoAeiYg7AscBW1a3SJLazSuAnoiInYBz8PCXJM2BA6AHIuI5wCnAetUtkqRu8AqgwyJiJeADwIHVLZKkbnEAdFRE3BY4Bti2ukWS1D0OgA6KiG2BY4GNqlskSd3kMwAdExFPBU7Dw1+SNAYHQEdExK0i4v003/FfsbpHktRtXgF0QESsBxwN7FjdIknqBwdAy0XEljQv87lDdYskqT+8AmixiHg8cDoe/pKkCXMAtFBELB8RBwOHAatU90iS+scrgJaJiHWAI4AHVbdIkvrLAdAiEXFvmvv+TatbJEn95hVAS0TEo4Az8PCXJM2AA6BYNN4EHAWsVt0jSRoGrwAKRcSKwKeB/atbJEnD4gAoEhFr0Pye/27VLZKk4XEAFIiI9YEvAwuqWyRJw+QAmLGIuANwKnDn6hZJ0nD5EOAMRcStgZPx8JckFXMA'+
			'zEhErAScANyjukWSJAfADERE0Dzt79v8JEmt4ACYjXcAj66OkCTp7xwAUxYRDwVeXN0hSdKNOQCmKCI2AA6t7pAk6eYcANN1KLBedYQkSTfnAJiSiHgWsFd1hyRJS+IAmIKIuC1wcHWHJElL4wCYjtcDq1ZHSJK0NA6ACYuIewBPqe6QJOmWOAAm723A8tURkiTdEgfABEXETsDe1R2SJC2LA2CyXlYdIEnSXDgAJiQiNgX2qO6QJGkuHACT8wwgqiMkSZoLB8AELH7V74HVHZIkzZUDYDL2A25THSFJ0lw5ACZj/+oASZLmwwEwpsUf/+9S3SFJ0nw4AMa3E/7srySpYxwA49uzOkCSpPlyAIzPASBJ6hwHwBgiYgPgLtUdkiTNlwNgPPeqDpAkaRQOgPHcszpAkqRROADG4wCQJHWSA2A8DgBJUic5AMazeXWAJA'+
			'1cVgd0lQNgRBERwNrVHZI0cL6FdUQOgNGtjv/9JEkd5QE2ujWrAyRJGpUDYHRrVQdIkjQqB8Do/ARAktRZDgBJkgbIATC6v1YHSJI0KgfA6C6vDpAkaVQOgNH5CYAkqbMcAKO7ElhUHSFJ0igcACPKzAQure6QpIHzp4BH5AAYz8+qAyRp4Pwp4BE5AMZzbnWAJEmjcACMxwEgSeokB8B4HACSpE5yAIznp9UBkiSNwgEwhsy8CPhFdYckSfPlABjfl6sDJEmaLwfA+BwAkqTOcQCM7zTg6uoISZLmwwEwpsy8Fji1ukOSpPlwAEzGkdUBkiTNhwNgMo4CLqmOkCRprhwAE7D4GuDj1R2SJM2VA2ByPoxvpZIkdYQDYEIy83+Bk6s7JEmaCwfAZL2tOkCSpLlwAExQZp4GfLG6Q5KkZXEATN7LgIXVEZIk3RIHwIRl'+
			'5nnAJ6o7JEm6JQ6A6Xgt/jywJKnFHABTkJkXAC+p7pAkaWkcAFOSmR8EvlTdIUnSkjgApuupwJ+qIyRJujkHwBRl5kU0I0CSpFZxAExZZp4IvLO6Q5KkG3MAzMZLgc9XR0iS9HcOgBnIzAQOAL5V3SJJEjgAZmbxK4P3Ac6rbpEkyQEwQ5l5GbAH8MvqFknSsDkAZiwzfwfsAHy/ukWSNFwOgAKZeTHwQOCU6hZJ0jA5AIpk5hXAXsCR1S2SpOFxABTKzOuAxwL/CWRxjiRpQBwAxbLxH8B+wFXVPZKkYXAAtERmHgNsB/xvdYskqf8cAC2SmT8BtgK+Vt0iSeo3B0DLZOZfgIfg+wMkSVPkAGihzFyYmS8BngD8rbpHktQ/DoAWy8zPAvcHflfdIknqFwdAy2XmD4D74YuEJEkT5ADogMW/HLgb8IHqFklSPzgAOi'+
			'Izr8/M5wAHAddV90iSus0B0DGZeSiwM/DH4hRJUoc5ADooM8+geS7grOoWSVI3OQA6KjMvAHYCPl7dIknqHgdAh2XmtZn5VODfgRuqeyRJ3eEA6IHM/C+abwn8qbpFktQNDoCeyMzTaJ4L+GF1iySp/RwAPZKZvwV2AA6vbpEktZsDoGcy82+Z+XjgpcDC6h5JUjs5AHoqMw8G9gQurW6RJLWPA6DHMvOrwFbAudUtkqR2cQD0XGb+CtgWOLa6RZLUHg6AAcjMK4F9gdcAWZwjSWoBB8BAZOONwD7AX6t7JEm1HAADk5knAtsA/1PdIkmq4wAYoMz8GbA18OXqFklSDQfAQGXm5cBDgbdUt0iSZs8BMGCZuSgzXwk8GriqukeSNDsOAJGZRwHbA7+ubpEkzYYDQABk5v+n+dGgr1e3SJKmzwGgf8jMPwMPBt5d3SJJ'+
			'mi4HgG4iMxdm5ouAA4BrqnskSdPhANASZeZngAcAv69ukSRNngNAS5WZ5wALgNOrWyRJk+UA0C3KzIuBXYAPVbdIkibHAaBlyszrM/NZwNOB66p7JEnjcwBozjLzo8ADgQurWyRJ43EAaF4y87vA/YDvVbdIkkbnANC8ZeYfgB2BTxanSJJG5ADQSDLz2sx8CvB84IbqHknS/DgANJbMfB+wO3BJdYskae4cABpbZn6D5rmAH1W3SJLmxgGgicjM84EdgCOqWyRJy+YA0MRk5tWZ+VjgZcCi6h5J0tI5ADRxmfl2YC/gsuoWSdKSOQA0FZl5MrAVcF51iyTpXzkANDWZ+UtgW+D46hZJ0k05ADRVmXkF8EjgdUDW1kiS/s4BoKnLxuuBRwBXVPdIkhwAmqHMPIHmSuAX1S2SNHQOAM1UZp4HbA2cVN0iSUPmANDMZe'+
			'ZlwN7A26pbJGmoHAAqkZmLMvPlwGOAq6t7JGloHAAqlZlHAtsDvylOkaRBcQCoXGb+mOZlQqdWt0jSUDgA1AqZ+WfgwcB7q1skaQgcAGqNzLwhM18APBm4pjhHknrNAaDWycxPATsCf6hukaS+cgColTLzbGAB8J3qFknqIweAWiszLwJ2AT5S3SJJfeMAUKtl5nWZ+QzgmcD11T2S1BcOAHVCZn6Y5tOAi6pbJKkPHADqjMw8neb3As6ubpGkrnMAqFMy8/c03xD4dHWLJHWZA0Cdk5nXZOaTgBcCC6t7JKmLHADqrMx8D7A78OfqFknqGgeAOi0zT6V5LuDH1S2S1CUOAHVeZv6G5o2Cny9OkaTOcACoFzLz6szcH3gFsKi6R5LazgGgXsnMtwJ7A5dVt0hSmzkA1DuZeRKwNfDf1S2S1FYOAPVSZv4C2Ab4QnWL'+
			'JLWRA0C9lZlXAA8H3gBkcY4ktYoDQL2WjdcCjwKurO6RpLZwAGgQMvM4YFvgl9UtktQGDgANRmaeS/Nw4FeqWySpmgNAg5KZlwJ7Am+vbpGkSg4ADU5mLsrMlwGPA66u7pGkCg4ADVZmfg7YATi/ukWSZs0BoEHLzB/RvEzom8UpkjRTDgANXmZeAjwIOKS6RZJmxQEgAZl5Q2Y+DzgQuLa6R5KmzQEg3UhmfgLYCbigukWSpskBIN1MZp4FLADOqG6RpGlxAEhLkJkXAjsDHytOkaSpcABIS5GZ12Xm04BnA9dX90jSJDkApGXIzA8CuwIXV7dI0qQ4AKQ5yMxv0/xewPerWyRpEhwA0hxl5u+A+wOHVbdI0rgcANI8ZOY1mflE4MXAwuoeSRqVA0AaQWa+C9gD+Et1iySNwgEgjSgzT6F5LuAn1S2SNF8OAGkMmf'+
			'lrYDvg6OoWSZoPB4A0psy8KjP3A14FLKrukaS5cABIE5KZbwYeBlxe3SJJy+IAkCYoM78EbAP8rLpFkm6JA0CasMz8Oc0IOLG6RZKWxgEgTUFm/hXYB3gTkMU5kvQvHADSlGTj1cC+wJXVPZJ0Yw4Aacoy81iarwr+qrpFkv7OASDNQGb+FNgK+Fp1iySBA0Camcy8FHgIcHB1iyQ5AKQZysyFmflS4PHA36p7JA2XA0AqkJmH07xa+LfVLZKGyQEgFcnMH9C8TOhb1S2ShscBIBXKzD8BuwLvr26RNCwOAKlYZt6Qmc8FDgKuq+6RNAwOAKklMvNQYCfgj9UtkvrPASC1SGaeCSwAzqxukdRvDgCpZTLzj8DOwKHFKZJ6zAEgtVBmXpuZBwHPBW6o7pHUPw4AqcUy8/3AbsCfqlsk9YsDQGq5zDyN5vcCflDdIqk/'+
			'HABSB2Tmb2l+OfDw6hZJ/eAAkDoiM/+WmY8HXgosrO6R1G0OAKljMvNgmrcKXlrdIqm7HABSB2Xm14CtgJ9Wt0jqJgeA1FGZ+StgO+DY6hZJ3eMAkDosM68E9gVeDWRxjqQOcQBIHZeNNwH7AH+t7pHUDQ4AqScy80RgG+Dn1S2S2s8BIPVIZv6MZgR8qbpFUrs5AKSeyczLgYcBb65ukdReDgCphzJzUWa+CtgPuKq6R1L7OACkHsvMo2m+Kvjr6hZJ7eIAkHouM39C8zKhU6pbJLWHA0AagMz8C7AH8K7qFknt4ACQBiIzF2bmi4EnAtdU90iq5QCQBiYzD6N5tfDvqlsk1XEASAOUmd+neS7g29Utkmo4AKSBysyLgV2BD1a3SJo9B4A0YJl5fWY+G3gacF11j6TZcQBIIjM/BuwMXFicImlGHACSAMjMM4AFwF'+
			'nVLZKmzwEg6R8y8wJgJ+AT1S2SpssBIOkmMvPazDwQeB5wQ3WPpOlwAEhaosw8BHgQcEl1i6TJcwBIWqrM/CbN7wX8qDhF0oQ5ACTdosw8H9gBOKK6RdLkOAAkLVNmXp2ZjwVeBiyq7pE0PgeApDnLzLcDewKXVrdIGo8DQNK8ZOZXgK2Bc6tbJI3OASBp3jLzl8C2wHHVLZJG4wCQNJLMvBJ4FPBaIItzJM2TA0DSyLLxBuDhwBXVPZLmzgEgaWyZ+QVgG+AX1S2S5sYBIGkiMvO/aR4OPKm6RdKyOQAkTUxmXgbsDby1ukXSLXMASJqozFyUma8A9geuru6RtGQOAElTkZmfB7YHflOcImkJHACSpiYzf0zzMqFTq1sk3ZQDQNJUZeafgd2B91S3SPonB4CkqcvMhZn5QuBJwDXVPZIcAJJmKDM/DewI/L66RRo6'+
			'B4CkmcrMs2meCzi9ukUaMgeApJnLzIuAXYAPV7dIQ+UAkFQiM6/PzGcCzwCuq+6RhsYBIKlUZn6E5tOAi6pbpCFxAEgql5nfARYAZ1e3SEPhAJDUCpn5B5pvCHyqukUaAgeApNbIzGsy88nAC4AbinOkXnMASGqdzHwv8GDgz9UtUl85ACS1UmaeSvN7AT+ubpH6yAEgqbUy8zc0bxQ8sjhF6h0HgKRWy8yrM/MxwMuBRdU9Ul84ACR1Qma+DdgbuKy6ReoDB4CkzsjMk4CtgfOqW6SucwBI6pTM/AWwLXBCdYvUZQ4ASZ2TmVcAjwBeD2RxjtRJDgBJnZSN1wGPBK4ozpE6xwEgqdMy83iaK4FfVreoxDXVAV3lAJDUeZl5HrAVcHJ1i2buL9UBXeUAkNQLmXkZsBfw9uoWzZQDYESR6fMzkvolIh4DHAqsWt2iqU'+
			'rgVpm5sDqkixwAknopIrYAjgc2rm7R1FyWmWtXR3SVVwCSeikzf0TzMqFvVLdoanxb5BgcAJJ6KzMvAXYH3lfdoqnw/n8MDgBJvZaZN2Tm84GnANdW92iiflUd0GUOAEmDkJmfBHYE/lCcosk5szqgyxwAkgYjM79H81zAd6tbNBFnVQd0mQNA0qBk5oXAA4GPVrdoLNcBP6yO6DIHgKTByczrMvPpwLOA66t7NJIfZqbPdIzBASBpsDLzQ8AuwMXVLZo3P/4fkwNA0qBl5unAAuCc6hbNyxnVAV3nLwFKEhARKwMfAZ5Y3aJlugbYMDMvrw7pMj8BkCQgM6/JzAOAFwH+tny7He/hPz4HgCTdSGa+G3gw/sxsm32yOqAPvAKQpCWIiE1oXiZ0n+oW3cQFwB19A+D4/ARAkpYgM38NbA8cVd2im/iMh/9kOAAkaSky'+
			'86rMfDTwSmBRdY8A+FR1QF94BSBJcxARewKHA2tVtwzY1zNzt+qIvnAASNIcRcRdgROAzatbBmqbxe9z0AR4BSBJc5SZ/wNsA5xY3TJAx3r4T5YDQJLmITP/CuwDvBHwI9TZWAi8qjqibxwAkjRP2XgNsC9wZXXPAHwqM39WHdE3PgMgSYe3hvwAAAJ8SURBVGOIiHvSPBewWXVLT10L3CUzf1cd0jd+AiBJY8jMc4GtgK9Wt/TUmzz8p8NPACRpAiJieeCtwEuqW3rkVOBBmelvMEyBA0CSJigiHgd8DFiluqXj/gTcNzP/WB3SV14BSNIEZebhwA7Ab6tbOiyBAzz8p8sBIEkTlpk/BO4HnFbd0lEHZ+bJ1RF95xWAJE1JRKwAvBt4bnVLh3wHeGBmXl8d0ncOAEmasog4EPgAsFJ1S8v9ENglMy+rDhkCB4AkzU'+
			'BEbAMcC9y2uqWlfgrsnJl/rg4ZCp8BkKQZyMyzaJ4LOKO6pYV+Duzm4T9bDgBJmpHFT7XvDBxanNImv6L52P+i6pChcQBI0gxl5nWZeRDwHGDoD7r9nObwv6A6ZIgcAJJUIDM/AOwGXFzdUuQYYKvM9PcSijgAJKlIZn4L2BL4SnXLDN0AvDQz983MK6pjhsxvAUhSC0TE04GDgTWqW6boQmD/xcNHxRwAktQSEbEx8HFgl+qWKTgNeKw/79seXgFIUktk5vk0zwU8F7iqOGdSzqc5+Hf28G8XPwGQpBaKiM1oPg3YsbplRFcAbwHenZnXVMfoXzkAJKnFImJn4EXA3kDU1szJQprh8mq/299uDgBJ6oCIuCvwQuBJwCrFOUtyJXAYcEhmnlcdo2VzAEhSh0TEusAzaZ4T2LA4B+AnwAeBw/xaX7c4ACSpgyJiRWAv'+
			'YNfFfzaf4V9/LnAScFxmfneGf68myAEgST0QERvRfH1wF5pBsPEE//UXAmfSHPon++t9/eAAkKQeiohNgQXABsB6wPqL/6x3o3+uSfO0/uXAXxf/8zKaF/Sc9/c/mXnprPs1ff8HLNq8w2iWjngAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Atras";
		el.ggDx=-110;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._atras.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._atras.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._atras.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._atras.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._atras.style[domTransition]='left 0s, top 0s';
				if (me._atras.ggCurrentLogicStatePosition == 0) {
					this.ggDx = -100;
					me._atras.style.top='-1px';
					me._atras.ggUpdatePosition(true);
				}
				else {
					me._atras.ggDx=-110;
					me._atras.style.top='-1px';
					me._atras.ggUpdatePosition(true);
				}
			}
		}
		me._atras.onclick=function (e) {
			player.setVariableValue('SEMANA_PASSADA', true);
			player.setVariableValue('SEMANA_ATUAL', false);
			if (
				(
					((me.ggUserdata.description == "PARKING_1_A")) && 
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node23}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "PARKING_2_A")) && 
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node24}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "ADM_1_A")) && 
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node29}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "ADM_2_A")) && 
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node30}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "ADM_3_A")) && 
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node26}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "ADM_4_A")) && 
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node27}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "ADM_5_A")) && 
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node28}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "NIVEL_2 A_A")) && 
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node25}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "NIVEL_2 B_A")) && 
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node22}","$(cur)");
			}
		}
		me._atras.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._atras);
		el=me._avano=document.createElement('div');
		els=me._avano__img=document.createElement('img');
		els.className='ggskin ggskin_avano';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Avan\xe7o";
		el.ggDx=106;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._avano.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._avano.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._avano.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._avano.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._avano.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._avano.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 90;
					me._avano.style.top='-2px';
					me._avano.ggUpdatePosition(true);
				}
				else {
					me._avano.ggDx=106;
					me._avano.style.top='-2px';
					me._avano.ggUpdatePosition(true);
				}
			}
		}
		me._avano.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._avano.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._avano.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._avano.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._avano.ggCurrentLogicStateScaling == 0) {
					me._avano.ggParameter.sx = 0.8;
					me._avano.ggParameter.sy = 8;
					me._avano.style[domTransform]=parameterToTransform(me._avano.ggParameter);
				}
				else {
					me._avano.ggParameter.sx = 1;
					me._avano.ggParameter.sy = 1;
					me._avano.style[domTransform]=parameterToTransform(me._avano.ggParameter);
				}
			}
		}
		me._avano.onclick=function (e) {
			player.setVariableValue('SEMANA_ATUAL', true);
			player.setVariableValue('SEMANA_PASSADA', false);
			if (
				(
					((me.ggUserdata.description == "PARKING_1_B")) && 
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node9}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "PARKING_2_B")) && 
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node11}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "ADM_1_B")) && 
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node12}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "ADM_2_B")) && 
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node13}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "ADM_3_B")) && 
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node16}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "ADM_4_B")) && 
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node18}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "ADM_5_B")) && 
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node17}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "NIVEL_2 A_B")) && 
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node21}","$(cur)");
			}
			if (
				(
					((me.ggUserdata.description == "NIVEL_2 B_B")) && 
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node20}","$(cur)");
			}
		}
		me._avano.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._avano);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 102px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._text_1.ggCurrentLogicStateScaling == 0) {
					me._text_1.ggParameter.sx = 0.8;
					me._text_1.ggParameter.sy = 8;
					me._text_1.style[domTransform]=parameterToTransform(me._text_1.ggParameter);
				}
				else {
					me._text_1.ggParameter.sx = 1;
					me._text_1.ggParameter.sy = 1;
					me._text_1.style[domTransform]=parameterToTransform(me._text_1.ggParameter);
				}
			}
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._text_1);
		el=me._nivel_2=document.createElement('div');
		el.ggId="NIVEL 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 282px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 357px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nivel_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nivel_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nivel_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nivel_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nivel_2.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._nivel_2.ggCurrentLogicStateScaling == 0) {
					me._nivel_2.ggParameter.sx = 0.7;
					me._nivel_2.ggParameter.sy = 0.7;
					me._nivel_2.style[domTransform]=parameterToTransform(me._nivel_2.ggParameter);
				}
				else {
					me._nivel_2.ggParameter.sx = 1;
					me._nivel_2.ggParameter.sy = 1;
					me._nivel_2.style[domTransform]=parameterToTransform(me._nivel_2.ggParameter);
				}
			}
		}
		me._nivel_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=2;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,61,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 272px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 347px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nivel_2.appendChild(me._rectangle_4);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=2;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 84.0426%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 89.6358%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nivel_2.appendChild(me._image_1);
		el=me._nivel_2_a=document.createElement('div');
		el.ggId="NIVEL_2 A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #aa5500;';
		hs+='border : 1px solid #aa5500;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 168px;';
		hs+='position : absolute;';
		hs+='top : 236px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nivel_2_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nivel_2_a.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1)) && 
				((player.getVariableValue('activeRoom1A') == false)) && 
				((me.ggUserdata.title != "Room 1A"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nivel_2_a.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nivel_2_a.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nivel_2_a.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._nivel_2_a.ggCurrentLogicStateScaling == 0) {
					me._nivel_2_a.ggParameter.sx = 0.8;
					me._nivel_2_a.ggParameter.sy = 0.8;
					me._nivel_2_a.style[domTransform]=parameterToTransform(me._nivel_2_a.ggParameter);
				}
				else {
					me._nivel_2_a.ggParameter.sx = 1;
					me._nivel_2_a.ggParameter.sy = 1;
					me._nivel_2_a.style[domTransform]=parameterToTransform(me._nivel_2_a.ggParameter);
				}
			}
		}
		me._nivel_2_a.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Ponto8') == true)) || 
				((me.ggUserdata.title == "NIVEL_2 A"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._nivel_2_a.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._nivel_2_a.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._nivel_2_a.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._nivel_2_a.ggCurrentLogicStateBackgroundColor == 0) {
					me._nivel_2_a.style.backgroundColor="rgba(0,255,0,1)";
				}
				else {
					me._nivel_2_a.style.backgroundColor="rgba(170,85,0,1)";
				}
			}
		}
		me._nivel_2_a.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node21}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node25}","$(cur)");
			}
			player.setVariableValue('Ponto8', true);
			player.setVariableValue('Ponto1', false);
			player.setVariableValue('Ponto2', false);
			player.setVariableValue('Ponto3', false);
			player.setVariableValue('Ponto4', false);
			player.setVariableValue('Ponto5', false);
			player.setVariableValue('Ponto6', false);
			player.setVariableValue('Ponto7', false);
			player.setVariableValue('Ponto9', false);
		}
		me._nivel_2_a.onmouseover=function (e) {
			me.elementMouseOver['nivel_2_a']=true;
			me._texto_nivel_2_a.logicBlock_visible();
		}
		me._nivel_2_a.onmouseout=function (e) {
			me.elementMouseOver['nivel_2_a']=false;
			me._texto_nivel_2_a.logicBlock_visible();
		}
		me._nivel_2_a.ontouchend=function (e) {
			me.elementMouseOver['nivel_2_a']=false;
			me._texto_nivel_2_a.logicBlock_visible();
		}
		me._nivel_2_a.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_nivel_2_a=document.createElement('div');
		els=me._texto_nivel_2_a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto_NIVEL_2 A";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='background: #aa5500;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="NIVEL_2 A";
		el.appendChild(els);
		me._texto_nivel_2_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_nivel_2_a.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['nivel_2_a'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_nivel_2_a.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_nivel_2_a.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_nivel_2_a.style[domTransition]='';
				if (me._texto_nivel_2_a.ggCurrentLogicStateVisible == 0) {
					me._texto_nivel_2_a.style.visibility=(Number(me._texto_nivel_2_a.style.opacity)>0||!me._texto_nivel_2_a.style.opacity)?'inherit':'hidden';
					me._texto_nivel_2_a.ggVisible=true;
				}
				else {
					me._texto_nivel_2_a.style.visibility="hidden";
					me._texto_nivel_2_a.ggVisible=false;
				}
			}
		}
		me._texto_nivel_2_a.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nivel_2_a.appendChild(me._texto_nivel_2_a);
		me._nivel_2.appendChild(me._nivel_2_a);
		el=me._nivel_2_b=document.createElement('div');
		el.ggId="NIVEL_2 B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #aa5500;';
		hs+='border : 1px solid #aa5500;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 167px;';
		hs+='position : absolute;';
		hs+='top : 78px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nivel_2_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nivel_2_b.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1)) && 
				((player.getVariableValue('activeRoom1B') == false)) && 
				((me.ggUserdata.title != "Room 1B"))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nivel_2_b.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nivel_2_b.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nivel_2_b.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._nivel_2_b.ggCurrentLogicStateScaling == 0) {
					me._nivel_2_b.ggParameter.sx = 0.8;
					me._nivel_2_b.ggParameter.sy = 0.8;
					me._nivel_2_b.style[domTransform]=parameterToTransform(me._nivel_2_b.ggParameter);
				}
				else {
					me._nivel_2_b.ggParameter.sx = 1;
					me._nivel_2_b.ggParameter.sy = 1;
					me._nivel_2_b.style[domTransform]=parameterToTransform(me._nivel_2_b.ggParameter);
				}
			}
		}
		me._nivel_2_b.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('Ponto9') == true)) || 
				((me.ggUserdata.title == "NIVEL_2 B"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._nivel_2_b.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._nivel_2_b.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._nivel_2_b.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._nivel_2_b.ggCurrentLogicStateBackgroundColor == 0) {
					me._nivel_2_b.style.backgroundColor="rgba(0,255,0,1)";
				}
				else {
					me._nivel_2_b.style.backgroundColor="rgba(170,85,0,1)";
				}
			}
		}
		me._nivel_2_b.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext("{node20}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext("{node22}","$(cur)");
			}
			player.setVariableValue('Ponto9', true);
			player.setVariableValue('Ponto1', false);
			player.setVariableValue('Ponto2', false);
			player.setVariableValue('Ponto3', false);
			player.setVariableValue('Ponto4', false);
			player.setVariableValue('Ponto5', false);
			player.setVariableValue('Ponto6', false);
			player.setVariableValue('Ponto7', false);
			player.setVariableValue('Ponto8', false);
		}
		me._nivel_2_b.onmouseover=function (e) {
			me.elementMouseOver['nivel_2_b']=true;
			me._texto_nivel_2_b.logicBlock_visible();
		}
		me._nivel_2_b.onmouseout=function (e) {
			me.elementMouseOver['nivel_2_b']=false;
			me._texto_nivel_2_b.logicBlock_visible();
		}
		me._nivel_2_b.ontouchend=function (e) {
			me.elementMouseOver['nivel_2_b']=false;
			me._texto_nivel_2_b.logicBlock_visible();
		}
		me._nivel_2_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_nivel_2_b=document.createElement('div');
		els=me._texto_nivel_2_b__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto_NIVEL_2 B";
		el.ggDx=0;
		el.ggDy=22;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='background: #aa5500;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="NIVEL_2 B";
		el.appendChild(els);
		me._texto_nivel_2_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_nivel_2_b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['nivel_2_b'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_nivel_2_b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_nivel_2_b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_nivel_2_b.style[domTransition]='';
				if (me._texto_nivel_2_b.ggCurrentLogicStateVisible == 0) {
					me._texto_nivel_2_b.style.visibility=(Number(me._texto_nivel_2_b.style.opacity)>0||!me._texto_nivel_2_b.style.opacity)?'inherit':'hidden';
					me._texto_nivel_2_b.ggVisible=true;
				}
				else {
					me._texto_nivel_2_b.style.visibility="hidden";
					me._texto_nivel_2_b.ggVisible=false;
				}
			}
		}
		me._texto_nivel_2_b.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nivel_2_b.appendChild(me._texto_nivel_2_b);
		me._nivel_2.appendChild(me._nivel_2_b);
		me.divSkin.appendChild(me._nivel_2);
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #f38d17;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_10.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._rectangle_10.ggCurrentLogicStateScaling == 0) {
					me._rectangle_10.ggParameter.sx = 0.8;
					me._rectangle_10.ggParameter.sy = 8;
					me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
				}
				else {
					me._rectangle_10.ggParameter.sx = 1;
					me._rectangle_10.ggParameter.sy = 1;
					me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
				}
			}
		}
		me._rectangle_10.onclick=function (e) {
			player.setVariableValue('SETA', !player.getVariableValue('SETA'));
		}
		me._rectangle_10.onmouseover=function (e) {
			me.elementMouseOver['rectangle_10']=true;
			me._seta0.logicBlock_visible();
		}
		me._rectangle_10.onmouseout=function (e) {
			me.elementMouseOver['rectangle_10']=false;
			me._seta0.logicBlock_visible();
		}
		me._rectangle_10.ontouchend=function (e) {
			me.elementMouseOver['rectangle_10']=false;
			me._seta0.logicBlock_visible();
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._seta0=document.createElement('div');
		els=me._seta0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Seta";
		el.ggDx=0;
		el.ggDy=25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #aa5500;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Seta - ON";
		el.appendChild(els);
		me._seta0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seta0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._seta0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._seta0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._seta0.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._seta0.ggCurrentLogicStateScaling == 0) {
					me._seta0.ggParameter.sx = 0.8;
					me._seta0.ggParameter.sy = 8;
					me._seta0.style[domTransform]=parameterToTransform(me._seta0.ggParameter);
				}
				else {
					me._seta0.ggParameter.sx = 1;
					me._seta0.ggParameter.sy = 1;
					me._seta0.style[domTransform]=parameterToTransform(me._seta0.ggParameter);
				}
			}
		}
		me._seta0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['rectangle_10'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._seta0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._seta0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._seta0.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._seta0.ggCurrentLogicStateVisible == 0) {
					me._seta0.style.visibility=(Number(me._seta0.style.opacity)>0||!me._seta0.style.opacity)?'inherit':'hidden';
					me._seta0.ggVisible=true;
				}
				else {
					me._seta0.style.visibility="hidden";
					me._seta0.ggVisible=false;
				}
			}
		}
		me._seta0.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('SETA') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._seta0.ggCurrentLogicStateText != newLogicStateText) {
				me._seta0.ggCurrentLogicStateText = newLogicStateText;
				me._seta0.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._seta0.ggCurrentLogicStateText == 0) {
					me._seta0.ggText="Seta - OFF";
					me._seta0__text.innerHTML=me._seta0.ggText;
					if (me._seta0.ggUpdateText) {
					me._seta0.ggUpdateText=function() {
						var hs="Seta - OFF";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._seta0.ggUpdatePosition) me._seta0.ggUpdatePosition();
					}
				}
				else {
					me._seta0.ggText="Seta - ON";
					me._seta0__text.innerHTML=me._seta0.ggText;
					if (me._seta0.ggUpdateText) {
					me._seta0.ggUpdateText=function() {
						var hs="Seta - ON";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._seta0.ggUpdatePosition) me._seta0.ggUpdatePosition();
					}
				}
			}
		}
		me._seta0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_10.appendChild(me._seta0);
		me.divSkin.appendChild(me._rectangle_10);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #d14500;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 0.8;
					me._rectangle_1.ggParameter.sy = 8;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
				else {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
			}
		}
		me._rectangle_1.onclick=function (e) {
			player.setVariableValue('VID', !player.getVariableValue('VID'));
			me._video_1.ggVisible = !me._video_1.ggVisible;
			var flag=me._video_1.ggVisible;
			if (me._video_1.ggVideoNotLoaded) {
				me._video_1.ggInitMedia(me._video_1.ggVideoSource);
			}
			else {
				me._video_1.ggInitMedia('');
			}
			me._video_1.style[domTransition]='none';
			me._video_1.style.visibility=((flag)&&(Number(me._video_1.style.opacity)>0||!me._video_1.style.opacity))?'inherit':'hidden';
			me._video_2.ggVisible = !me._video_2.ggVisible;
			var flag=me._video_2.ggVisible;
			if (me._video_2.ggVideoNotLoaded) {
				me._video_2.ggInitMedia(me._video_2.ggVideoSource);
			}
			else {
				me._video_2.ggInitMedia('');
			}
			me._video_2.style[domTransition]='none';
			me._video_2.style.visibility=((flag)&&(Number(me._video_2.style.opacity)>0||!me._video_2.style.opacity))?'inherit':'hidden';
			me._rectangle_2.ggVisible = !me._rectangle_2.ggVisible;
			var flag=me._rectangle_2.ggVisible;
			me._rectangle_2.style[domTransition]='none';
			me._rectangle_2.style.visibility=((flag)&&(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity))?'inherit':'hidden';
		}
		me._rectangle_1.onmouseover=function (e) {
			me.elementMouseOver['rectangle_1']=true;
			me._seta.logicBlock_visible();
		}
		me._rectangle_1.onmouseout=function (e) {
			me.elementMouseOver['rectangle_1']=false;
			me._seta.logicBlock_visible();
		}
		me._rectangle_1.ontouchend=function (e) {
			me.elementMouseOver['rectangle_1']=false;
			me._seta.logicBlock_visible();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._seta=document.createElement('div');
		els=me._seta__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Seta";
		el.ggDx=0;
		el.ggDy=25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #aa5500;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Video - ON";
		el.appendChild(els);
		me._seta.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seta.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._seta.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._seta.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._seta.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._seta.ggCurrentLogicStateScaling == 0) {
					me._seta.ggParameter.sx = 0.8;
					me._seta.ggParameter.sy = 8;
					me._seta.style[domTransform]=parameterToTransform(me._seta.ggParameter);
				}
				else {
					me._seta.ggParameter.sx = 1;
					me._seta.ggParameter.sy = 1;
					me._seta.style[domTransform]=parameterToTransform(me._seta.ggParameter);
				}
			}
		}
		me._seta.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['rectangle_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._seta.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._seta.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._seta.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._seta.ggCurrentLogicStateVisible == 0) {
					me._seta.style.visibility=(Number(me._seta.style.opacity)>0||!me._seta.style.opacity)?'inherit':'hidden';
					me._seta.ggVisible=true;
				}
				else {
					me._seta.style.visibility="hidden";
					me._seta.ggVisible=false;
				}
			}
		}
		me._seta.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('VID') == false))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._seta.ggCurrentLogicStateText != newLogicStateText) {
				me._seta.ggCurrentLogicStateText = newLogicStateText;
				me._seta.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._seta.ggCurrentLogicStateText == 0) {
					me._seta.ggText="Video - OFF";
					me._seta__text.innerHTML=me._seta.ggText;
					if (me._seta.ggUpdateText) {
					me._seta.ggUpdateText=function() {
						var hs="Video - OFF";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._seta.ggUpdatePosition) me._seta.ggUpdatePosition();
					}
				}
				else {
					me._seta.ggText="Video - ON";
					me._seta__text.innerHTML=me._seta.ggText;
					if (me._seta.ggUpdateText) {
					me._seta.ggUpdateText=function() {
						var hs="Video - ON";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._seta.ggUpdatePosition) me._seta.ggUpdatePosition();
					}
				}
			}
		}
		me._seta.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._seta);
		me.divSkin.appendChild(me._rectangle_1);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #030303;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 450px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 1050px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_2.style[domTransition]='';
				if (me._rectangle_2.ggCurrentLogicStateVisible == 0) {
					me._rectangle_2.style.visibility="hidden";
					me._rectangle_2.ggVisible=false;
				}
				else {
					me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
					me._rectangle_2.ggVisible=true;
				}
			}
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._rectangle_2);
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if (me._video_1__vid) {
				me._video_1__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._video_1.ggVideoNotLoaded ==false && me._video_1.ggDeactivate) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_1');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('video');
			me._video_1__vid.className='ggskin ggskin_video';
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('controlsList', 'nodownload');
			me._video_1__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_1__vid.setAttribute('autoplay', '');
			me._video_1__vid.setAttribute('controls', '');
			me._video_1__vid.setAttribute('loop', '');
			me._video_1__vid.muted = true;
			me._video_1__vid.volume = 0.0;
			me._video_1__source=document.createElement('source');
			me._video_1__source.setAttribute('src', media);
			me._video_1__vid.setAttribute('playsinline', 'playsinline');
			me._video_1__vid.setAttribute('style', ';');
			me._video_1__vid.style.outline = 'none';
			me._video_1__vid.appendChild(me._video_1__source);
			me._video_1.appendChild(me._video_1__vid);
			var videoEl = player.registerVideoElement('Video 1', me._video_1__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._video_1.ggVideoSource = media;
		}
		el.ggId="Video 1";
		el.ggDx=-250;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 500px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_1.ggIsActive=function() {
			if (me._video_1__vid != null) {
				return (me._video_1__vid.paused == false && me._video_1__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_1.style[domTransition]='';
				if (me._video_1.ggCurrentLogicStateVisible == 0) {
					me._video_1.style.visibility="hidden";
					me._video_1.ggInitMedia('');
					me._video_1.ggVisible=false;
				}
				else {
					me._video_1.style.visibility=(Number(me._video_1.style.opacity)>0||!me._video_1.style.opacity)?'inherit':'hidden';
					if (me._video_1.ggVideoNotLoaded) {
						me._video_1.ggInitMedia(me._video_1.ggVideoSource);
					}
					me._video_1.ggVisible=true;
				}
			}
		}
		me._video_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._video_1);
		el=me._video_2=document.createElement('div');
		me._video_2.seekbars = [];
		me._video_2.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_2.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_2.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_2.hasChildNodes()) {
				me._video_2.removeChild(me._video_2.lastChild);
			}
			if (me._video_2__vid) {
				me._video_2__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._video_2.ggVideoNotLoaded ==false && me._video_2.ggDeactivate) { me._video_2.ggDeactivate(); }
				me._video_2.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_2');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_2.ggVideoNotLoaded = false;
			me._video_2__vid=document.createElement('video');
			me._video_2__vid.className='ggskin ggskin_video';
			me._video_2__vid.setAttribute('width', '100%');
			me._video_2__vid.setAttribute('height', '100%');
			me._video_2__vid.setAttribute('controlsList', 'nodownload');
			me._video_2__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_2__vid.setAttribute('autoplay', '');
			me._video_2__vid.setAttribute('controls', '');
			me._video_2__vid.setAttribute('loop', '');
			me._video_2__vid.muted = true;
			me._video_2__vid.volume = 0.0;
			me._video_2__source=document.createElement('source');
			me._video_2__source.setAttribute('src', media);
			me._video_2__vid.setAttribute('playsinline', 'playsinline');
			me._video_2__vid.setAttribute('style', ';');
			me._video_2__vid.style.outline = 'none';
			me._video_2__vid.appendChild(me._video_2__source);
			me._video_2.appendChild(me._video_2__vid);
			var videoEl = player.registerVideoElement('Video 2', me._video_2__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._video_2.ggVideoSource = media;
		}
		el.ggId="Video 2";
		el.ggDx=250;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 500px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_2.ggIsActive=function() {
			if (me._video_2__vid != null) {
				return (me._video_2__vid.paused == false && me._video_2__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_2.style[domTransition]='';
				if (me._video_2.ggCurrentLogicStateVisible == 0) {
					me._video_2.style.visibility="hidden";
					me._video_2.ggInitMedia('');
					me._video_2.ggVisible=false;
				}
				else {
					me._video_2.style.visibility=(Number(me._video_2.style.opacity)>0||!me._video_2.style.opacity)?'inherit':'hidden';
					if (me._video_2.ggVideoNotLoaded) {
						me._video_2.ggInitMedia(me._video_2.ggVideoSource);
					}
					me._video_2.ggVisible=true;
				}
			}
		}
		me._video_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._video_2);
		me._video_1.ggInitMedia('media/Obra.mp4');
		me._video_2.ggInitMedia('media/Obra2.mp4');
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_SETA = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_size) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_size();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			if (
				(
					((me.ggUserdata.tags.indexOf("DD_2024.06.24") != -1)) && 
					((player.getVariableValue('SEMANA_PASSADA') == true))
				)
			) {
				player.openNext(me.hotspot.url,"$(cur)");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("DD_2024.07.01") != -1)) && 
					((player.getVariableValue('SEMANA_ATUAL') == true))
				)
			) {
				player.openNext(me.hotspot.url,"$(cur)");
			}
			if (
				(
					((me.ggUserdata.title != "PARKING_1"))
				)
			) {
				player.setVariableValue('Ponto1', false);
			}
			if (
				(
					((me.ggUserdata.title != "PARKING_2"))
				)
			) {
				player.setVariableValue('Ponto2', false);
			}
			if (
				(
					((me.ggUserdata.title != "ADM_1"))
				)
			) {
				player.setVariableValue('Ponto3', false);
			}
			if (
				(
					((me.ggUserdata.title != "ADM_2"))
				)
			) {
				player.setVariableValue('Ponto4', false);
			}
			if (
				(
					((me.ggUserdata.title != "ADM_3"))
				)
			) {
				player.setVariableValue('Ponto5', false);
			}
			if (
				(
					((me.ggUserdata.title != "ADM_4"))
				)
			) {
				player.setVariableValue('Ponto6', false);
			}
			if (
				(
					((me.ggUserdata.title != "ADM_5"))
				)
			) {
				player.setVariableValue('Ponto7', false);
			}
			if (
				(
					((me.ggUserdata.title != "NIVEL_2 A"))
				)
			) {
				player.setVariableValue('Ponto8', false);
			}
			if (
				(
					((me.ggUserdata.title != "NIVEL_2 B"))
				)
			) {
				player.setVariableValue('Ponto9', false);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwID'+
			'AgMTAwMCAxMDAwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SETA') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwID'+
			'AgMTAwMCAxMDAwIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SETA') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwID'+
			'AgMTAwMCAxMDAwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SETA') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_3d_preview') == false)) || 
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style[domTransition]='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yNDAgMzMyIDEzMCAxMzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PS'+
			'ItMjQwIDMzMiAxMzAgMTMwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._hs_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style[domTransition]='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((me.hotspot.title != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((142-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNjLTAuOCwwLTEuNS0wLjct'+
			'MS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS41LTAuNywxLjUtMS41TC'+
			'0xNjUuNSwzOTEuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0MzQuMWgtMTcuN2MtMC45'+
			'LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOSwwLDEuNy'+
			'0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_info_image'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_info_image.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_info_image.style[domTransition]='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._ht_info_image.ggCurrentLogicStateSize == 0) {
					me._ht_info_image.style.width='64px';
					me._ht_info_image.style.height='64px';
					setTimeout(function() {skin.updateSize(me._ht_info_image);}, 1000);
				}
				else {
					me._ht_info_image.style.width='32px';
					me._ht_info_image.style.height='32px';
					setTimeout(function() {skin.updateSize(me._ht_info_image);}, 1000);
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_image']=true;
			me._ht_info_image.logicBlock_size();
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_image']=false;
			me._ht_info_image.logicBlock_size();
		}
		me._ht_info_image.ontouchend=function (e) {
			me.elementMouseOver['ht_info_image']=false;
			me._ht_info_image.logicBlock_size();
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_image);
		me.__div = me._ht_info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_SETA();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview();;
		} else
		{
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._tt_enter_vr.logicBlock_position();
	me._adm_4.logicBlock_scaling();
	me._adm_5.logicBlock_scaling();
	me._adm_1.logicBlock_scaling();
	me._parking_2.logicBlock_scaling();
	me._parking_1.logicBlock_scaling();
	me._adm_3.logicBlock_scaling();
	me._adm_2.logicBlock_scaling();
	me._nivel_2_a.logicBlock_scaling();
	me._nivel_2_b.logicBlock_scaling();
	me._information.logicBlock_visible();
	me._data.logicBlock_backgroundcolor();
	me._data.logicBlock_bordercolor();
	me._data.logicBlock_text();
	me._adm_4.logicBlock_backgroundcolor();
	me._adm_5.logicBlock_backgroundcolor();
	me._adm_1.logicBlock_backgroundcolor();
	me._parking_2.logicBlock_backgroundcolor();
	me._parking_1.logicBlock_backgroundcolor();
	me._adm_3.logicBlock_backgroundcolor();
	me._adm_2.logicBlock_backgroundcolor();
	me._botao_nivel_2.logicBlock_backgroundcolor();
	me._botao_nivel_2.logicBlock_textcolor();
	me._botao_nivel_1.logicBlock_backgroundcolor();
	me._botao_nivel_1.logicBlock_textcolor();
	me._nivel_2_a.logicBlock_backgroundcolor();
	me._nivel_2_b.logicBlock_backgroundcolor();
	me._seta0.logicBlock_text();
	me._seta.logicBlock_text();
	me._enter_vr.logicBlock_visible();
	me._data.logicBlock_scaling();
	me._nivel_1.logicBlock_scaling();
	me._botao_nivel_2.logicBlock_scaling();
	me._botao_nivel_1.logicBlock_scaling();
	me._atras.logicBlock_position();
	me._avano.logicBlock_position();
	me._avano.logicBlock_scaling();
	me._text_1.logicBlock_scaling();
	me._nivel_2.logicBlock_scaling();
	me._rectangle_10.logicBlock_scaling();
	me._seta0.logicBlock_scaling();
	me._rectangle_1.logicBlock_scaling();
	me._seta.logicBlock_scaling();
	me._rectangle_2.logicBlock_visible();
	me._video_1.logicBlock_visible();
	me._video_2.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._tt_enter_vr.logicBlock_position();me._adm_4.logicBlock_scaling();me._adm_5.logicBlock_scaling();me._adm_1.logicBlock_scaling();me._parking_2.logicBlock_scaling();me._parking_1.logicBlock_scaling();me._adm_3.logicBlock_scaling();me._adm_2.logicBlock_scaling();me._nivel_2_a.logicBlock_scaling();me._nivel_2_b.logicBlock_scaling(); });
	player.addListener('changenode', function(args) { me._information.logicBlock_visible();me._data.logicBlock_backgroundcolor();me._data.logicBlock_bordercolor();me._data.logicBlock_text();me._adm_4.logicBlock_scaling();me._adm_4.logicBlock_backgroundcolor();me._adm_5.logicBlock_scaling();me._adm_5.logicBlock_backgroundcolor();me._adm_1.logicBlock_scaling();me._adm_1.logicBlock_backgroundcolor();me._parking_2.logicBlock_scaling();me._parking_2.logicBlock_backgroundcolor();me._parking_1.logicBlock_scaling();me._parking_1.logicBlock_backgroundcolor();me._adm_3.logicBlock_scaling();me._adm_3.logicBlock_backgroundcolor();me._adm_2.logicBlock_scaling();me._adm_2.logicBlock_backgroundcolor();me._botao_nivel_2.logicBlock_backgroundcolor();me._botao_nivel_2.logicBlock_textcolor();me._botao_nivel_1.logicBlock_backgroundcolor();me._botao_nivel_1.logicBlock_textcolor();me._nivel_2_a.logicBlock_scaling();me._nivel_2_a.logicBlock_backgroundcolor();me._nivel_2_b.logicBlock_scaling();me._nivel_2_b.logicBlock_backgroundcolor();me._seta0.logicBlock_text();me._seta.logicBlock_text(); });
	player.addListener('configloaded', function(args) { me._enter_vr.logicBlock_visible();me._data.logicBlock_scaling();me._nivel_1.logicBlock_scaling();me._botao_nivel_2.logicBlock_scaling();me._botao_nivel_1.logicBlock_scaling();me._atras.logicBlock_position();me._avano.logicBlock_position();me._avano.logicBlock_scaling();me._text_1.logicBlock_scaling();me._nivel_2.logicBlock_scaling();me._rectangle_10.logicBlock_scaling();me._seta0.logicBlock_scaling();me._rectangle_1.logicBlock_scaling();me._seta.logicBlock_scaling();me._rectangle_2.logicBlock_visible();me._video_1.logicBlock_visible();me._video_2.logicBlock_visible(); });
	player.addListener('activehotspotchanged', function(args) { me._adm_4.logicBlock_scaling();me._adm_4.logicBlock_backgroundcolor();me._adm_5.logicBlock_scaling();me._adm_5.logicBlock_backgroundcolor();me._adm_1.logicBlock_scaling();me._adm_1.logicBlock_backgroundcolor();me._parking_2.logicBlock_scaling();me._parking_2.logicBlock_backgroundcolor();me._parking_1.logicBlock_scaling();me._parking_1.logicBlock_backgroundcolor();me._adm_3.logicBlock_scaling();me._adm_3.logicBlock_backgroundcolor();me._adm_2.logicBlock_scaling();me._adm_2.logicBlock_backgroundcolor();me._nivel_2_a.logicBlock_scaling();me._nivel_2_a.logicBlock_backgroundcolor();me._nivel_2_b.logicBlock_scaling();me._nivel_2_b.logicBlock_backgroundcolor(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._information.logicBlock_visible(); });
	player.addListener('varchanged_SEMANA_PASSADA', function(args) { me._data.logicBlock_backgroundcolor();me._data.logicBlock_bordercolor();me._data.logicBlock_text(); });
	player.addListener('varchanged_B2', function(args) { me._botao_nivel_2.logicBlock_backgroundcolor();me._botao_nivel_2.logicBlock_textcolor(); });
	player.addListener('varchanged_B1', function(args) { me._botao_nivel_1.logicBlock_backgroundcolor();me._botao_nivel_1.logicBlock_textcolor(); });
	player.addListener('varchanged_SETA', function(args) { me._seta0.logicBlock_text(); });
	player.addListener('varchanged_var_hs', function(args) { me._adm_4.logicBlock_scaling();me._adm_5.logicBlock_scaling();me._adm_1.logicBlock_scaling();me._parking_2.logicBlock_scaling();me._parking_1.logicBlock_scaling();me._adm_3.logicBlock_scaling();me._adm_2.logicBlock_scaling();me._nivel_2_a.logicBlock_scaling();me._nivel_2_b.logicBlock_scaling(); });
	player.addListener('varchanged_Ponto6', function(args) { me._adm_4.logicBlock_backgroundcolor(); });
	player.addListener('varchanged_Ponto7', function(args) { me._adm_5.logicBlock_backgroundcolor(); });
	player.addListener('varchanged_Ponto3', function(args) { me._adm_1.logicBlock_backgroundcolor(); });
	player.addListener('varchanged_Ponto2', function(args) { me._parking_2.logicBlock_backgroundcolor(); });
	player.addListener('varchanged_Ponto1', function(args) { me._parking_1.logicBlock_backgroundcolor(); });
	player.addListener('varchanged_Ponto5', function(args) { me._adm_3.logicBlock_backgroundcolor(); });
	player.addListener('varchanged_Ponto4', function(args) { me._adm_2.logicBlock_backgroundcolor(); });
	player.addListener('varchanged_Ponto8', function(args) { me._nivel_2_a.logicBlock_backgroundcolor(); });
	player.addListener('varchanged_Ponto9', function(args) { me._nivel_2_b.logicBlock_backgroundcolor(); });
	player.addListener('varchanged_VID', function(args) { me._seta.logicBlock_text(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_info_mouseover(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged(); });
	player.addListener('varchanged_SETA', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_SETA(); });
	player.addListener('varchanged_opt_3d_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};