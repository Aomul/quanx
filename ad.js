var body = $response.body; 
var obj =JOSN.parse(body);

obj.vipTime= 3000-01-01 00:00:00.000;
obj.objectEx = ture;
body = JSON.stringify(obj);
$done(body);
