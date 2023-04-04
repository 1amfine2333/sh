if (-1 != $request.url.indexOf("arke-webapp/v3/home/prime/page")) {
	let e = JSON.parse($response.body.replace(/\"memberStatus":\d+/g, '"memberStatus":1')
		.replace(/\"buttonText":".*?"/g, '"buttonText":"永久会员"')
		.replace(/\"hasPaid\":\w+/g, '"hasPaid":true')
		.replace(/\"downLoadAll\":\w+/g, '"downLoadAll":true')
		.replace(/\"videoTime\":\d+/g, '\"videoTime\":3000')
		.replace(/\"startEnable\":\w+/g, '"startEnable":true')
		.replace(/\"memberStatus\":\d+/g, '"memberStatus":1')
		.replace(/\"preview\":\w+/g, '"preview":true')
		.replace(/\"errorCode\":\d+/g, '"errorCode":0')
		.replace(/\"status\":\w+/g, '\"status\":true'));
	e.data.moduleItems.moduleMap.primeEntrySmallNewV3.primeUserInfo.intros = []$done({
		body: JSON.stringify(e)
	})
}
else $done();
