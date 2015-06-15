
 var ele;
var P2 = new PM.ExilityPage(window, 'assetMasterSearch');
P2.pageWidth = 1028;
P2.pageHeight = 700;
P2.breadCrumpTitle = 'assetMasterSearch';
ele = new PM.AssistedInputField();
ele.dataType = 'number';
ele.defaultValue = '3';
ele.isFilterOperator = true;
ele.isRequired = true;
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.valueList = '1,Equals;2,Starts with;3,Contains';
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.name = 'assetNameOperator';
ele.label = 'Asset Name';
ele.value = '3';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'text';
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.isFilterField = true;
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.name = 'assetName';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'number';
ele.defaultValue = '1';
ele.isFilterOperator = true;
ele.isRequired = true;
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.valueList = '1,Equals;4,Greater than;5,Less than;6,Between';
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.name = 'assetGroupIdOperator';
ele.label = 'Asset Group';
ele.value = '1';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'number';
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.isFilterField = true;
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.name = 'assetGroupId';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'number';
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.fromField = 'assetGroupId';
ele.name = 'assetGroupIdTo';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'number';
ele.defaultValue = '1';
ele.isFilterOperator = true;
ele.isRequired = true;
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.valueList = '1,Equals;4,Greater than;5,Less than;6,Between';
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.name = 'locationMasterIdOperator';
ele.label = 'Location';
ele.value = '1';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'number';
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.isFilterField = true;
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.name = 'locationMasterId';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'number';
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.fromField = 'locationMasterId';
ele.name = 'locationMasterIdTo';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'number';
ele.defaultValue = '1';
ele.isFilterOperator = true;
ele.isRequired = true;
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.valueList = '1,Equals;4,Greater than;5,Less than;6,Between';
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.name = 'purchaseDateOperator';
ele.label = 'Purchased On';
ele.value = '1';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'pastDate';
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.isFilterField = true;
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.name = 'purchaseDate';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'pastDate';
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.fromField = 'purchaseDate';
ele.name = 'purchaseDateTo';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'number';
ele.defaultValue = '1';
ele.isFilterOperator = true;
ele.isRequired = true;
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.valueList = '1,Equals;4,Greater than;5,Less than;6,Between';
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.name = 'retirementDateOperator';
ele.label = 'To be Retired on';
ele.value = '1';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'futureDate';
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.isFilterField = true;
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.name = 'retirementDate';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.AssistedInputField();
ele.dataType = 'futureDate';
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.suggestAfterMinChars = 1;
ele.fromField = 'retirementDate';
ele.name = 'retirementDateTo';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.TextInputField();
ele.dataType = 'yn';
ele.minCharsToTriggerService = 1;
ele.isValid = true;
ele.valueList = '0,No;1,Yes';
ele.codePickerLeft = -1;
ele.codePickerTop = -1;
ele.name = 'isRetired';
ele.label = 'Retired?';
ele.value = '';
P2.addField(ele);

/* MetaData for Panel :assetLis with table name = assets*/
ele = new PM.ListPanel();
ele.name = 'assets';
ele.panelName = 'assetLis';
ele.onClickActionName = 'view';
ele.pageSize = 5;
ele.paginateButtonType = 'linear';
ele.showHeader = true;
ele.simulateClickOnRow = 'none';
ele.tableName = 'assets';
ele.slideEffect = 'none';
//linkedTableName  DOES NOT EXIST

P2.addTable(ele);
ele = new PM.OutputField();
ele.dataType = 'text';
ele.name = 'assets_assetName';
ele.tableName = 'assets';
ele.unqualifiedName = 'assetName';
ele.label = 'Asset Name';
ele.value = '';
P2.addField(ele);
ele = new PM.HiddenField();
ele.dataType = 'id';
ele.name = 'assets_id';
ele.tableName = 'assets';
ele.unqualifiedName = 'id';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'number';
ele.name = 'assets_assetGroupId';
ele.tableName = 'assets';
ele.unqualifiedName = 'assetGroupId';
ele.label = 'Asset Group';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'number';
ele.name = 'assets_modelId';
ele.tableName = 'assets';
ele.unqualifiedName = 'modelId';
ele.label = 'Model Id';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'text';
ele.name = 'assets_manufacturerPartNo';
ele.tableName = 'assets';
ele.unqualifiedName = 'manufacturerPartNo';
ele.label = 'Manuf Part No';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'number';
ele.name = 'assets_locationMasterId';
ele.tableName = 'assets';
ele.unqualifiedName = 'locationMasterId';
ele.label = 'Location';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'pastDate';
ele.name = 'assets_purchaseDate';
ele.tableName = 'assets';
ele.unqualifiedName = 'purchaseDate';
ele.label = 'Purchased On';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'price';
ele.name = 'assets_price';
ele.tableName = 'assets';
ele.unqualifiedName = 'price';
ele.label = 'Price';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'text';
ele.name = 'assets_poNumber';
ele.tableName = 'assets';
ele.unqualifiedName = 'poNumber';
ele.label = 'Purchase Order No';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'text';
ele.name = 'assets_invoiceNumber';
ele.tableName = 'assets';
ele.unqualifiedName = 'invoiceNumber';
ele.label = 'Invoice No';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'text';
ele.name = 'assets_insured';
ele.tableName = 'assets';
ele.unqualifiedName = 'insured';
ele.label = 'Insurance Reference';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'futureDate';
ele.name = 'assets_retirementDate';
ele.tableName = 'assets';
ele.unqualifiedName = 'retirementDate';
ele.label = 'To be Retired on';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'yn';
ele.valueList = '0,No;1,Yes';
ele.name = 'assets_isRetired';
ele.tableName = 'assets';
ele.unqualifiedName = 'isRetired';
ele.label = 'Retired?';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'pastDate';
ele.name = 'assets_retiredOn';
ele.tableName = 'assets';
ele.unqualifiedName = 'retiredOn';
ele.label = 'Retired On';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'text';
ele.name = 'assets_systemSerialNo';
ele.tableName = 'assets';
ele.unqualifiedName = 'systemSerialNo';
ele.label = 'System Sl No';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'number';
ele.name = 'assets_osid';
ele.tableName = 'assets';
ele.unqualifiedName = 'osid';
ele.label = 'OS Id';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'text';
ele.name = 'assets_monitorSerialNo';
ele.tableName = 'assets';
ele.unqualifiedName = 'monitorSerialNo';
ele.label = 'Monitor Sl No';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'number';
ele.name = 'assets_ramId';
ele.tableName = 'assets';
ele.unqualifiedName = 'ramId';
ele.label = 'Ram Id';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'number';
ele.name = 'assets_processorId';
ele.tableName = 'assets';
ele.unqualifiedName = 'processorId';
ele.label = 'Processor Id';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'number';
ele.name = 'assets_hardDiskId';
ele.tableName = 'assets';
ele.unqualifiedName = 'hardDiskId';
ele.label = 'Hard Disk Id';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'text';
ele.name = 'assets_adapterSerialNo';
ele.tableName = 'assets';
ele.unqualifiedName = 'adapterSerialNo';
ele.label = 'Adapter Sl No';
ele.value = '';
P2.addField(ele);
ele = new PM.OutputField();
ele.dataType = 'text';
ele.name = 'assets_accessories';
ele.tableName = 'assets';
ele.unqualifiedName = 'accessories';
ele.label = 'Accessories';
ele.value = '';
P2.addField(ele);
ele = new PM.HiddenField();
ele.dataType = 'text';
ele.name = 'assets_createdBy';
ele.tableName = 'assets';
ele.unqualifiedName = 'createdBy';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.HiddenField();
ele.dataType = 'timeStamp';
ele.name = 'assets_createdOn';
ele.tableName = 'assets';
ele.unqualifiedName = 'createdOn';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.HiddenField();
ele.dataType = 'text';
ele.name = 'assets_modifiedBy';
ele.tableName = 'assets';
ele.unqualifiedName = 'modifiedBy';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.HiddenField();
ele.dataType = 'timeStamp';
ele.name = 'assets_modifiedOn';
ele.tableName = 'assets';
ele.unqualifiedName = 'modifiedOn';
ele.label = '';
ele.value = '';
P2.addField(ele);
ele = new PM.HiddenField();
ele.dataType = 'number';
ele.defaultValue = '1';
ele.name = 'assets_companyId';
ele.tableName = 'assets';
ele.unqualifiedName = 'companyId';
ele.label = '';
ele.value = '1';
P2.addField(ele);
ele = new PM.HiddenField();
ele.dataType = 'number';
ele.name = 'assets_oldId';
ele.tableName = 'assets';
ele.unqualifiedName = 'oldId';
ele.label = '';
ele.value = '';
P2.addField(ele);
/***** action field = disableAsset  ********/
ele = new PM.DummyAction();
ele.name = 'disableAsset';
ele.disableFields = [ 'assetName','isRetired','assetGroupId'];
P2.addAction(ele);
/***** action field = enableAsset  ********/
ele = new PM.DummyAction();
ele.name = 'enableAsset';
ele.enableFields = [ 'assetName','isRetired','assetGroupId'];
P2.addAction(ele);
/***** action field = filterAssets  ********/
ele = new PM.ServerAction();
ele.name = 'filterAssets';
ele.serviceId = 'eta.filterAssets';
ele.submitForm = true;
ele.toRefreshPage = 'beforeMyAction';
ele.disableForm = true;
ele.resetFormModifiedState = true;
ele.closeWindow = true;
P2.addAction(ele);
/***** action field = close  ********/
ele = new PM.CloseAction();
ele.name = 'close';
ele.warnIfFormIsModified = true;
P2.addAction(ele);
/***** action field = view  ********/
ele = new PM.NavigationAction();
ele.name = 'view';
ele.pageToGo = 'eta/assetMasterView.htm';
ele.windowDisposal = 'retainState';
ele.queryFieldNames = [ 'id'];
ele.queryFieldSources = [ 'assets_id'];
P2.addAction(ele);
/***** action field = new  ********/
ele = new PM.NavigationAction();
ele.name = 'new';
ele.pageToGo = 'eta/assetMasterEdit.htm';
ele.windowDisposal = 'retainState';
P2.addAction(ele);