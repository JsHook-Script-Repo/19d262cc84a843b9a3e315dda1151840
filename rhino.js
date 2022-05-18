var currentPackageName = common.getlpparam().packageName;
if (currentPackageName == 'com.nexstreaming.app.kinemasterfree') {
    //unlocked
    common.hookMethod('c8.a', 'd', ['int'], function (param) {
        param.setResult(java.lang.Boolean.valueOf('true'));
    });
} else if (currentPackageName == 'org.swiftapps.swiftbackup') {
    //unlock premium
    common.hookMethod('org.swiftapps.swiftbackup.common.V', 'getA', [], function (param) {
        param.setResult(java.lang.Boolean.valueOf('true'));
    });
} else if (currentPackageName == 'com.bigwinepot.nwdn.international') {
    //Premium Unlocked @Rindaman5555
    common.hookConstructor('com.bendingspoons.oracle.api.OracleService$Settings', ['java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'boolean', 'boolean', 'java.util.Map', 'java.lang.String', 'java.lang.String', 'boolean', 'int', 'int', 'int', 'int', 'int', 'int', 'java.lang.String', 'java.lang.String', 'java.lang.String'], null, function (param) {
        common.setObjectField(param.thisObject, 'k', java.lang.Boolean.valueOf('true'));
    });
}