// let users= ["Mary" ,"James" ,"BadKarma" ,"averagestudent" ,"ydl+" ,"Cameron" ,"Nathan" ,"stanley" ,"Aaron" ,"Ashley" ,"real_name_hidden" ,"casanova" ,"Something" ,"ManEatsPants" ,"Babushka" ,"Lay_ayanami" ,"Avogrado" ,"Avocadorable" ,"ima.robot" ,"PNUT" ,"O.O" ,"spy" ,"tata909" ,"shiroku_1782" ,"yuwwdno40k" ,"tsto2j034" ,"uchihahahahha" ,"jojo0293" ,"just_a_name" ,"end_." ,"jemoka" ,"dnwo" ,"nocpw" ,"1-`3-" ,"rj4023hrno" ,"-uj[jfw" ,"yui" ,"behingy" ,"root" ,"admin" ,"test" ,"guest" ,"info" ,"adm" ,"mysql" ,"user" ,"administrator" ,"oracle" ,"ftp" ,"pi" ,"puppet" ,"ansible" ,"ec2-user" ,"vagrant" ,"azureuser" ,"++" ,"(any)" ,"(created)" ,"1" ,"11111111" ,"12.x" ,"1502" ,"18140815" ,"1nstaller" ,"2" ,"22222222" ,"30" ,"31994" ,"4Dgifts" ,"5" ,"6.x" ,"7" ,"ADAMS" ,"ADLDEMO" ,"ADMIN" ,"ADMINISTRATOR" ,"ADVMAIL" ,"ALLIN1" ,"ALLIN1MAIL" ,"ALLINONE" ,"ANDY" ,"AP" ,"AP2SVP" ,"APL2PP" ,"APPLSYS" ,"APPLSYSPUB" ,"APPS" ,"APPUSER" ,"AQ" ,"AQDEMO" ,"AQJAVA" ,"AQUSER" ,"ARAdmin" ,"ARCHIVIST" ,"AUDIOUSER" ,"AURORA$JIS$UTILITY$" ,"AURORA$ORB$UNAUTHENTICATED" ,"AUTOLOG1" ,"Admin" ,"Admin1" ,"Admin5" ,"Administrator" ,"AdvWebadmin" ,"Airaya" ,"Any" ,"Audrey" ,"BACKUP" ,"BATCH" ,"BATCH1" ,"Moe" ,"NAMES" ,"NETCON" ,"NETMGR" ,"NETNONPRIV" ,"NETOP" ,"NETPRIV" ,"NETSERVER" ,"NETWORK" ,"NEVIEW" ,"NEWINGRES" ,"NEWS" ,"NSA" ,"NetLinx" ,"Nice-admin" ,"OAS_PUBLIC" ,"OCITEST" ,"ODM" ,"ODM_MTR" ,"ODS" ,"PUBSUB" ,"PUBSUB1" ,"PVM" ,"Polycom" ,"QDBA" ,"QS" ,"QSRV" ,"QS_ADM" ,"QS_CB" ,"QS_CBADM" ,"QS_CS" ,"QS_ES" ,"QS_OS" ,"QS_WS" ,"RAID" ,"RDM470" ,"RE" ,"REPADMIN" ,"REPORT" ,"REPORTS_USER" ,"REP_MANAGER" ,"REP_OWNER" ,"RJE" ,"RMAIL" ,"RMAN" ,"RMUser1" ,"RNIServiceManager" ,"ROOT" ,"ROUTER" ,"RSBCMON" ,"RSCS" ,"RSCSV2" ,"Replicator" ,"Rodopi" ,"SA" ,"SABRE","SAMPLE" ,"SAP" ,"SAP*" ,"SAPCPIC" ,"enable" ,"eng" ,"enquiry" ,"epiq_api" ,"factory" ,"fal" ,"fam" ,"fastwire" ,"fax" ,"fg_sysadmin" ,"field" ,"firstsite" ,"ftp" ,"fwadmin" ,"games" ,"glftpd" ,"god1" ,"god2" ,"gonzo" ,"gopher" ,"gropher" ,"guest" ,"guest1" ,"guru" ,"halt" ,"hello" ,"host" ,"hqadmin" ,"hsa" ,"hscroot" ,"http" ,"ibm" ,"iceman" ,"user_marketer" ,"user_pricer" ,"user_publisher" ,"username" ,"uucp" ,"uucpadm" ,"uwmadmin" ,"vcr" ,"vgnadmin" ,"viewer" ,"viewuser" ,"voadmin" ,"volition" ,"vpasp" ,"web" ,"web_api" ,"webadmin" ,"weblogic" ,"webmaster" ,"whd" ,"wlcsystem" ,"wlpisystem" ,"wlse" ,"wradmin" ,"write" ,"www" ,"xmi_demo" ,"zyfwp"];

const pics = [];
for (let i = 1; i <= 21; i++) {
    pics.push("imgs/profile-pics/pfp" + i + ".png");
}

// shuffle the lists
function shuffle(list) {
    for (let i = 0; i < list.length; i++) {
        const range = list.length - i;
        const j = Math.floor(Math.random() * range) + i;
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
}
shuffle(users);
shuffle(pics);



let nameindex = 0;
let picindex = 0;

function randomUsername(){
    const k = nameindex;
    nameindex = (nameindex + 1) % users.length;
    return users[k];
}

function randomPfp(){
    const k = picindex;
    picindex = (picindex + 1) % pics.length;
    return pics[k];
}
