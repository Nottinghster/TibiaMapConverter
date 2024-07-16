const HEADERS =  {
  "OTBM_MAP_HEADER": "0x00",
  "OTBM_MAP_DATA": "0x02",
  "OTBM_TILE_AREA": "0x04",
  "OTBM_TILE": "0x05",
  "OTBM_ITEM": "0x06",
  "OTBM_TOWNS": "0x0C",
  "OTBM_TOWN": "0x0D",
  "OTBM_HOUSETILE": "0x0E",
  "OTBM_WAYPOINTS": "0x0F",
  "OTBM_WAYPOINT": "0x10",
  "OTBM_TILE_ZONE": "0x13",
  
  "OTBM_ATTR_DESCRIPTION": "0x01",
  "OTBM_ATTR_EXT_FILE": "0x02",
  "OTBM_ATTR_TILE_FLAGS": "0x03",
  "OTBM_ATTR_ACTION_ID": "0x04",
  "OTBM_ATTR_UNIQUE_ID": "0x05",
  "OTBM_ATTR_TEXT": "0x06",
  "OTBM_ATTR_DESC": "0x07",
  "OTBM_ATTR_TELE_DEST": "0x08",
  "OTBM_ATTR_ITEM": "0x09",
  "OTBM_ATTR_DEPOT_ID": "0x0A",
  "OTBM_ATTR_EXT_SPAWN_FILE": "0x0B",
  "OTBM_ATTR_EXT_HOUSE_FILE": "0x0D",
  "OTBM_ATTR_HOUSEDOORID": "0x0E",
  "OTBM_ATTR_COUNT": "0x0F",
  "OTBM_ATTR_RUNE_CHARGES": "0x16",
  "OTBM_ATTR_EXT_ZONE_FILE": "0x18",
  
  "TILESTATE_NONE": "0x0000",
  "TILESTATE_PROTECTIONZONE": "0x0001",
  "TILESTATE_DEPRECATED": "0x0002",
  "TILESTATE_NOPVP": "0x0004",
  "TILESTATE_NOLOGOUT": "0x0008",
  "TILESTATE_PVPZONE": "0x0010",
  "TILESTATE_REFRESH": "0x0020"
}

Object.keys(HEADERS).forEach(function(x) {
  HEADERS[x] = Number(HEADERS[x]);
});

module.exports = HEADERS;
