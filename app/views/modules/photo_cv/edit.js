$(document).ready(function(){

	//au click sur inerer une section
	$(' .editCVImage').click(function () {
		let id = this.id.split("-")[1]
		$("#siteOptionsModal").modal('open')
		$("a[href=#options-medias]").click()
		MediaManagment.render(true, "uglyForm-"+id+"-imgUrl")
		initMainSaveBtn()
	})


})