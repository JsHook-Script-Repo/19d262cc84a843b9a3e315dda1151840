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
}