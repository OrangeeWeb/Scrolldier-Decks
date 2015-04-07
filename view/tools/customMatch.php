<div class="container">
	<div class="col-12">
		<div class="page-header">
			<h2>Custome Match Maker
			</h2>
		</div>
		<div class="col-12">
			<div class="col-6">
				<div class="col-12">
					<div class="form-element">
					<label>Timer: <small>How many seconds each player will have on a round</small>
						<select id="time">
							<option value="180">180 Sec</option>
							<option value="160">160 Sec</option>
							<option value="140">140 Sec</option>
							<option value="120">120 Sec</option>
							<option selected value="90">90 Sec (Normal)</option>
							<option value="75">75 Sec</option>
							<option value="60">60 Sec</option>
							<option value="60">60 Sec</option>
							<option value="45">45 Sec</option>
							<option value="30">30 Sec</option>
							<option value="20">20 Sec</option>
							<option value="15">15 Sec</option>
							<option value="10">10 Sec</option>
							<option value="1">1 Sec (not recomanded)</option>
						</select>
					</label>
				</div>
				</div>
			</div>
			<div class="col-6">
				<div class="col-6">
					<div class="form-element">
						<label>Resources Player 1
							<input id="resources-player-one" type="text" name="" value="" placeholder="Player 1"/>
						</label>
					</div>
				</div>
				<div class="col-6">
					<div class="form-element">
						<label>Resources Player 2
							<input id="resources-player-two" type="text" name="" value="" placeholder="Player 2" />
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="container">
	<div class="row">
		<div class="col-8 align-center col-offset-2">

		<label>Starting Player</label>
		<div class="form-element radio-col">
			<div class="col-4 align-left">
				<div class="col-12"><h3><label for="start-p1">Player One</label></h3></div>
				<button id="start-p1" class="btn btn-radio"></button>
			</div>
			<div class="col-4 algin-center">
				<div class="col-12"><h3><label for="start-rnd">Random</label></h3></div>
				<button id="start-rnd" class="btn btn-radio success"></button>
			</div>
			<div class="col-4 align-right">
				<div class="col-12"><h3><label for="start-p2">Player Two</label></h3></div>
				<button id="start-p2" class="btn btn-radio"></button>
			</div>
		</div>

	</div>
	</div>
	<div class="col-12">
		<div class="col-12 well board" style="background-image: url(/img/customeMatch/bg.png);">
			<div class="player-one">
			<div class="page-header">
				<h3>Player One <small>Challenger</small></h3>
			</div>
			<div class="col-12 align-center">
				<div class="tile-row">
					<div class="idol" data-row='0' data-player="P1">
						<input id="p1-idol-0" type="text" class="col-12 idol-box" name="" value="10" />
					</div>
					<div class="idol" data-row='1' data-player="P1">
						<input id="p1-idol-1" type="text" class="col-12 idol-box" name="" value="10" />
					</div>
					<div class="idol" data-row='2' data-player="P1">
						<input id="p1-idol-2" type="text" class="col-12 idol-box" name="" value="10" />
					</div>
					<div class="idol" data-row='3' data-player="P1">
						<input id="p1-idol-3" type="text" class="col-12 idol-box" name="" value="10" />
					</div>
					<div class="idol" data-row='4' data-player="P1">
						<input id="p1-idol-4" type="text" class="col-12 idol-box" name="" value="10" />
					</div>
				</div>
				<div class="all-tiles">
				<div class="tile-row">
					<div class="tile" data-row='0' data-col='2' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='1' data-col='2' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='2' data-col='2' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='3' data-col='2' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='4' data-col='2' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
				</div>
				<div class="tile-row">
					<div class="tile" data-row='0' data-col='1' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='1' data-col='1' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='2' data-col='1' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='3' data-col='1' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='4' data-col='1' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
				</div>
				<div class="tile-row">
					<div class="tile" data-row='0' data-col='0' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='1' data-col='0' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='2' data-col='0' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='3' data-col='0' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='4' data-col='0' data-player="P1" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					</div>
				</div>
			</div>
<!--
|0,2|0,1|0,0|
|1,2|1,1|1,0|
|2,2|2,1|2,0|
|3,2|3,1|3,0|
|4,2|4,1|4,0|
-->
		</div>
			<div class="player-two">
			<div class="page-header align-right">
				<h3><small>Challengee</small> Player Two</h3>
			</div>
			<div class="col-12 align-center">
				<div class="tile-row">
					<div class="tile" data-row='0' data-col='0' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='1' data-col='0' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='2' data-col='0' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='3' data-col='0' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='4' data-col='0' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
				</div>
				<div class="tile-row">
					<div class="tile" data-row='0' data-col='1' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='1' data-col='1' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='2' data-col='1' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='3' data-col='1' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='4' data-col='1' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
				</div>
				<div class="tile-row">
					<div class="tile" data-row='0' data-col='2' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='1' data-col='2' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='2' data-col='2' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='3' data-col='2' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
					<div class="tile" data-row='4' data-col='2' data-player="P2" data-boss="0" data-ap="" data-cd="" data-hp="" data-select="false" data-unit=""></div>
				</div>
				<div class="tile-row">
					<div class="idol" data-row='0' data-player="P2">
						<input id="p2-idol-0" type="text" class="col-12 idol-box" name="" value="10" />
					</div>
					<div  class="idol" data-row='1' data-player="P2">
						<input id="p2-idol-1" type="text" class="col-12 idol-box" name="" value="10" />
					</div>
					<div class="idol" data-row='2' data-player="P2">
						<input id="p2-idol-2" type="text" class="col-12 idol-box" name="" value="10" />
					</div>
					<div class="idol" data-row='3' data-player="P2">
						<input id="p2-idol-3" type="text" class="col-12 idol-box" name="" value="10" />
					</div>
					<div class="idol" data-row='4' data-player="P2">
						<input id="p2-idol-4" type="text" class="col-12 idol-box" name="" value="10" />
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
	<div class="col-12">
		<div class="col-12">
			<h3>Board Setup <small><span id="text-player"></span>, <span id="text-cords"></span></small></h3>
			<div class="col-4">
				<div class="form-element">
					<label> Unit Name <small>Type for suggestions</small>
						<input id="unit" type="text" class="typeahead" name="" value="" placeholder="Unit" />
					</label>
				</div>
			</div>
			<div class="col-4">
				<div class="form-element">
					<label> Attack <small>Empty for normal</small>
						<input id="ap" type="text" class="" name="" value="" placeholder="Attack" />
					</label>
				</div>
			</div>
			<div class="col-4">
				<div class="form-element">
					<label> Countdown <small>Empty for normal</small>
						<input id="cd" type="text" class="" name="" value="" placeholder="Countdown" />
					</label>
				</div>
			</div>
			<div class="col-4">
				<div class="form-element">
					<label> Health <small>Empty for normal</small>
						<input id="hp" type="text" class="" name="" value="" placeholder="Health" />
					</label>
				</div>
			</div>
			<div class="col-8">
				<label><small>Creates a boss unit at row, column with Attack, Health added to their base stats. Selectable controls if they can be targeted by spells and certain abilities (like Slayer);</small></label>

					<div class="form-element">
						<div class="col-6 align-right">
							<div class="left"><h3><label for="boss">Boss</label></h3></div>
							<button id="boss" class="btn btn-checkbox"></button>
						</div>
						<div class="col-6 align-right">
							<div class="left"><h3><label for="select">Selectable</label></h3></div>
							<button id="select" class="btn btn-checkbox"></button>
						</div>
					</div>
			</div>
		</div>
		</div>
	<div class="col-12">
		<div class="page-header">
			<h2>Spells & Enchantments</h2>
		</div>
		<div class="col-6">
			<div class="form-element">
				<div class="col-4 align-right col-offset-2">
					<div class="right"><h3><label for="enchant-p1">Player 1</label></h3></div>
					<button id="enchant-p1" class="btn btn-radio success"></button>
				</div>
				<div class="col-4 align-right">
					<div class="right"><h3><label for="enchant-p2">Player 2</label></h3></div>
					<button id="enchant-p2" class="btn btn-radio"></button>
				</div>
			</div>
			<div class="col-12">
				<div class="form-element">
					<label>Buff Units <small>Enchant all units that spawn.</small>
						<input id="enchant-text" type="text" class="typeahead" name="" value="" placeholder="Enchantment"/>
					</label>
				</div>
			</div>
			<div class="col-12">
				<div class="form-element">
					<button id="addEnchant" class="btn">Add</button>
				</div>
			</div>
			<div class="col-12">
				<ul class="list-well" id="enchants-list"></ul>
			</div>
		</div>
		<div class="col-6">
			
			<div class="form-element">
				<div class="col-4 align-right col-offset-2">
					<div class="right"><h3><label for="spell-p1">Player 1</label></h3></div>
					<button id="spell-p1" class="btn btn-radio success"></button>
				</div>
				<div class="col-4 align-right">
					<div class="right"><h3><label for="spell-p2">Player 2</label></h3></div>
					<button id="spell-p2" class="btn btn-radio"></button>
				</div>
			</div>
			<div class="col-12">
				<div class="form-element">
					<label>Cast Spells <small>Casts a spell every x round.</small>
						<input id="spells-text" type="text" class="typeahead" name="" value="" placeholder="Spells"/>
					</label>
				</div>
			</div>
			<div class="col-12">
				<div class="form-element">
				<label>Every X round:
					<input id="spell-Round" type="text" name="" value="" />
				</label>
				</div>
			</div>
			
			<div class="col-12">
				<div class="form-element">
					<button id="addSpell" class="btn">Add</button>
				</div>
			</div>
			<div class="col-12">
				<ul class="list-well" id="spell-list"></ul>
			</div>
		</div>
	</div>
</div>
	

<div class="container">
	<div class="col-12">
	<div class="form-element">
		<label>Output <small>Readonly</small></label>
		<textarea id="output" rows="10" readonly="readonly"></textarea>
	</div>
	<div class="form-element align-center">
		<button class="btn big success" id="genCode">Generate code</button>
	</div>
	</div>
</div>
<script>
$(function() {
	var selectedTile;
	var tiles = $("[class$=tile]");
	
	
	function removeAllActive() {
		$(tiles).removeClass("active");
	}
	
	function getPlayer(tile) {
		return $(tile).attr("data-player");
	}
	
	function getCol(tile) {
		return $(tile).attr("data-col");
	}
	
	function getRow(tile) {
		return $(tile).attr("data-row");
	}
	
	function getBoss(tile) {
		return $(tile).attr("data-boss");
	}
	
	function getAp(tile) {
		return $(tile).attr("data-ap");
	}
	function getHp(tile) {
		return $(tile).attr("data-hp");
	}
	function getCd(tile) {
		return $(tile).attr("data-cd");
	}
	function getUnit(tile) {
		return $(tile).attr("data-unit").replace(",", "\\,");
	}
	function getSelect(tile) {
		return $(tile).attr("data-select");
	}
	
	
	setActiveTile($(".all-tiles .tile-row:first-of-type .tile:first-of-type"));
	function setActiveTile(tile) {
		removeAllActive();
		$(tile).addClass("active");
		selectedTile = tile;
		updateForm(tile);
		$("#text-player").text(getPlayer(tile));
		$("#text-cords").text(getRow(tile) +", "+ getCol(tile));
	}
	
	$(tiles).click(function() {
		setActiveTile(this);
		
		//console.log("unit("+getPlayer(this)+", Unit Name, "+ getRow(this) +", "+ getCol(this) +")")
	});

	$("[id*=li-close]").on("click", function() {
		$(this).parent().remove();
		
	});
	
	$("#addEnchant").on("click", function() {
		if ($("#enchant-text").val() != "") {
			if ($("#enchant-p1").hasClass("success")) {
				player = "P1";
			} else {
				player = "P2";
			}
			
			
			var enchantName = $("#enchant-text").val();
			$("#enchants-list").prepend('<li id="idEnchant-1" data-player="'+player+'" data-enchantment="'+enchantName+'">'+player+'\'s units spawn with '+enchantName+' <button id="li-close" class="btn danger small right">&times;</button></li>');
			
			
			$("[id*=li-close]").on("click", function() {
				$(this).parent().remove();
				
			});
		}
	});
	
	$("#addSpell").on("click", function() {
		if ($("#spells-text").val() != "" && parseInt($("#spell-Round").val()) > 0) {
			if ($("#spell-p1").hasClass("success")) {
				player = "P1";
			} else {
				player = "P2";
			}
			var round = $("#spell-Round").val();
			
			var spell = $("#spells-text").val();
			$("#spell-list").prepend('<li id="idEnchant-1" data-player="'+player+'" data-spell="'+spell+'" data-round="'+round+'">'+player+' will cast '+spell+' every '+round+' round(s) <button id="li-close" class="btn danger small right">&times;</button></li>');
			
			$("[id*=li-close]").on("click", function() {
				$(this).parent().remove();
				
			});
		}
	});

	$("input[type=text]").on("input", function() {
		updateTile(selectedTile);		
	});
	$("input[type=text]").on("blur", function() {
		updateTile(selectedTile);		
	});

	function updateForm(tile) {
		$("#unit").val(getUnit(tile));
		$("#ap").val(getAp(tile));
		$("#cd").val(getCd(tile));
		$("#hp").val(getHp(tile));
		
		if (getBoss(tile) == 1) {
			$("#boss").addClass("success");
		} else {
			$("#boss").removeClass("success");
		}
		
		if (getSelect(tile) == "true") {
			$("#select").addClass("success");
		} else {
			$("#select").removeClass("success");
		}
	}
	
	$("#boss").click(function() {
		if ($(this).hasClass("success")) {
			$("#boss").removeClass("success");
			$(selectedTile).attr("data-boss", 0);
		} else {
			$("#boss").addClass("success");
			$(selectedTile).attr("data-boss", 1);
			
		}
	});
	
	$("#select").click(function() {
		if ($(this).hasClass("success")) {
			$("#select").removeClass("success");
			$(selectedTile).attr("data-select", "false");
		} else {
			$("#select").addClass("success");
			$(selectedTile).attr("data-select", "true");
			
		}
	});
	
	$("#start-p1").click(function() {
		$("#start-p1").addClass("success");
		$("#start-p2").removeClass("success");
		$("#start-rnd").removeClass("success");
	});
	$("#start-p2").click(function() {
		$("#start-p2").addClass("success");
		$("#start-p1").removeClass("success");
		$("#start-rnd").removeClass("success");
	});
	
	$("#start-rnd").click(function() {
		$("#start-rnd").addClass("success");
		$("#start-p1").removeClass("success");
		$("#start-p2").removeClass("success");
	});
	
	$("#enchant-p2").click(function() {
		$("#enchant-p2").addClass("success");
		$("#enchant-p1").removeClass("success");
	});
	$("#enchant-p1").click(function() {
		$("#enchant-p1").addClass("success");
		$("#enchant-p2").removeClass("success");
	});
	
	
	$("#spell-p2").click(function() {
		$("#spell-p2").addClass("success");
		$("#spell-p1").removeClass("success");
	});
	$("#spell-p1").click(function() {
		$("#spell-p1").addClass("success");
		$("#spell-p2").removeClass("success");
	});
	
	
	
	
	function updateTile(tile) {
		if ($("#unit").val() != "") {
			$(tile).addClass("ocupied");
		} else {
			$(tile).removeClass("ocupied");
		}
	
		$(tile).attr("data-unit", $("#unit").val());
		$(tile).attr("data-ap", $("#ap").val());
		$(tile).attr("data-cd", $("#cd").val());
		$(tile).attr("data-hp", $("#hp").val());
	}
	var output;
	//unit(target, name, row, column, ap, cd, hp);
	function generateCode() {
		output = "";
		if ($("#time").val() != 90) {
			output += "timer("+$("#time").val()+");\n";
		}
		
		if ($("#start-p1").hasClass("success")) {
			output += "starts(P1);\n";
		}
		if ($("#start-p2").hasClass("success")) {
			output += "starts(P2);\n";
		}
		
		if ($("#resources-player-one").val() != "") {
			output += "resources(P1, " + $("#resources-player-one").val() + ");\n";
		}
		if ($("#resources-player-two").val() != "") {
			output += "resources(P2, " + $("#resources-player-two").val() + ");\n";
		}
		//resources(target, amount);
		
		$(tiles).each(function() {
			if (getUnit(this) != "") {
				if (getBoss(this) == 1) {
						output += "boss("+getPlayer(this)+", " + getUnit(this) + ", " + getRow(this) + ", " + getCol(this) + ", " + getAp(this) + ", " + getHp(this) + ", " + getSelect(this) + ");\n";
					
				} else {
					if (getAp(this) != "" && getHp(this) != "" && getCd(this) != "") {
						output += "unit("+getPlayer(this)+", " + getUnit(this) + ", " + getRow(this) + ", " + getCol(this) + ", " + getAp(this) + ", " + getCd(this) + ", " + getHp(this) + ");\n";
					} else {
						output += "unit("+getPlayer(this)+", " + getUnit(this) + ", " + getRow(this) + ", " + getCol(this) + ");\n";
					}
				}
				
				
			}
		});
		
		//buffUnitCreated(target, enchantmentName);
		//<li id="idEnchant-1" data-player="'+player+'" data-enchantment="'+enchantName+'"
		
		$("#enchants-list li").each(function() {
			output += "buffUnitCreated("+$(this).attr("data-player")+", "+$(this).attr("data-enchantment")+");\n";
		});
		
		//spell(target, name, everyRound);
		$("#spell-list li").each(function() {
			output += "spell("+$(this).attr("data-player")+", "+$(this).attr("data-spell")+", "+$(this).attr("data-round")+");\n";
		});
		
		
		if ($("#p1-idol-0").val() == $("#p1-idol-1").val() &&
		    $("#p1-idol-0").val() == $("#p1-idol-2").val() &&
		    $("#p1-idol-0").val() == $("#p1-idol-3").val() && 
		    $("#p1-idol-0").val() == $("#p1-idol-4").val()) {
		    
		    	 if ($("#p1-idol-0").val() != 10) {
					output += "idols(P1, " + $("#p1-idol-0").val() + ");\n";
				 }
		} else {
		
			$("[id^=p1-idol]").each(function() {
				if ($(this).val() != 10) {
					output += "idol(P1, " + $(this).parent().attr("data-row") + ", " + $(this).val() + ");\n";
				}
			});
		}
		
		if ($("#p2-idol-0").val() == $("#p2-idol-1").val() &&
		    $("#p2-idol-0").val() == $("#p2-idol-2").val() &&
		    $("#p2-idol-0").val() == $("#p2-idol-3").val() && 
		    $("#p2-idol-0").val() == $("#p2-idol-4").val()) {
		    
		    if ($("#p2-idol-0").val() != 10) {
		    	output += "idols(P2, " + $("#p2-idol-0").val() + ");\n";
		    }
			
		} else {
			
			$("[id^=p2-idol]").each(function() {
				if ($(this).val() != 10) {
					output += "idol(P2, " + $(this).parent().attr("data-row") + ", " + $(this).val() + ");\n";
				}
			});
		}
		
		$("#output").text(output);
	}
	
	$("#genCode").click(function() {
		generateCode();
	});
	
});
<?php 

$arrayString = array();

$query = $deck->_db->prepare("SELECT name, id FROM scrollsCard WHERE kind = 'CREATURE' OR kind = 'STRUCTURE'");
$query->execute();

while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
	array_push($arrayString, $row['name']);
}


$arrayStringEnchant = array();

$query = $deck->_db->prepare("SELECT name, id FROM scrollsCard WHERE kind = 'ENCHANTMENT'");
$query->execute();

while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
	array_push($arrayStringEnchant, $row['name']);
}

$arrayStringSpells = array();

$query = $deck->_db->prepare("SELECT name, id FROM scrollsCard WHERE kind = 'SPELL'");
$query->execute();

while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
	array_push($arrayStringSpells, $row['name']);
}


 ?>
$(function() {
	var substringMatcher = function(strs) {
	  return function findMatches(q, cb) {
	    var matches, substrRegex;
	 
	    // an array that will be populated with substring matches
	    matches = [];
	 
	    // regex used to determine if a string contains the substring `q`
	    substrRegex = new RegExp(q, 'i');
	 
	    // iterate through the pool of strings and for any string that
	    // contains the substring `q`, add it to the `matches` array
	    $.each(strs, function(i, str) {
	      if (substrRegex.test(str)) {
	        // the typeahead jQuery plugin expects suggestions to a
	        // JavaScript object, refer to typeahead docs for more info
	        matches.push({ value: str });
	      }
	    });
	 
	    cb(matches);
	  };
	};
	 
	var scrolls = <?php echo json_encode($arrayString) ?>;
	var enchant = <?php echo json_encode($arrayStringEnchant) ?>;
	var spells = <?php echo json_encode($arrayStringSpells) ?>;
	 
	$('#unit').typeahead({
	  hint: false,
	  highlight: true,
	  minLength: 1
	},
	{
	  name: 'scrolls',
	  displayKey: 'value',
	  source: substringMatcher(scrolls)
	});
	
	$('#enchant-text').typeahead({
	  hint: false,
	  highlight: true,
	  minLength: 1
	},
	{
	  name: 'enchant',
	  displayKey: 'value',
	  source: substringMatcher(enchant)
	});
	$('#spells-text').typeahead({
	  hint: false,
	  highlight: true,
	  minLength: 1
	},
	{
	  name: 'spells',
	  displayKey: 'value',
	  source: substringMatcher(spells)
	});
});
</script>