import { Component, OnInit, TemplateRef } from '@angular/core';
import { TabsetConfig } from 'ngx-bootstrap/tabs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable'
import { ViewEncapsulation } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TabsetConfig],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  modalRef!: BsModalRef;
  title: string="demo";
  constructor(private modalService: BsModalService, private http:HttpService) {}

  public sharedtwolevelshow:boolean = false;
  public printtwolevelshow:boolean = false;
  public acatwolevelshow:boolean = false;
  public statetwolevelshow:boolean = false;
  public othertwolevelshow:boolean = false;
  public mytwolevelshow:boolean = false;
  public tabShowState:boolean = true;
  public appsetShowState:boolean = false;
  public transetShowState:boolean = false;
  public rightShowState:boolean = true;
  public setShowState:boolean = false;
  public tabs:Array<any> = [
    { title: 'View ORF Files', content: 'one', active: false, removable: true,  disabled: false, showState:false, cate:'vof'},
    { title: 'Submit Batches', content: 'Second Tab Content', active: false, removable: true,  disabled: false, showState:false, cate:'sb'},
    { title: 'Accept Batches', content: 'Third Tab Content', active: false, removable: true,  disabled: false, showState:false, cate:'vb'},
    { title: 'Reject Batches', content: 'Fourth Tab Content', active: false, removable: true,  disabled: false, showState:false, cate:'rb'}
  ];
  public sqBtnGroup:Array<any> = [
    { content:'2020 Print 1099-MISC'},
    { content:'2020 Print 1098'}
  ]
  public printBtnGroup:Array<any> = [
    { content:'2'},
    { content:'Print 1099-MISC'}
  ]
  public acaBtnGroup:Array<any> = [
    { content:'aaaaa'}
  ]
  public stateBtnGroup:Array<any> = [
    { content:'New Query 2'}
  ]
  public otherBtnGroup:Array<any> = [
    { content:'other Query'}
  ]
  public myBtnGroup:Array<any> = [
    { content:'2020 W-2'}
  ]
  public resultCount:number = 0;
  public resultCountShowState:boolean = false;
  public queryname:string = "";
  public queryGroup:Array<any> = [
    { content:'My Queries'},
    { content:'Shared Queries'},
    { content:'Print Queries'},
    { content:'Transmittals Queries'},
    { content:'ACA Transmittals Queries'},
    { content:'State Transmittals Queries'},
    { content:'Other Queries'}
  ]

  public actGroup:Array<any> = [
    { content:'Generate Print Files'},
    { content:'Generate Print Files by Form Type'},
    { content:'Generate Federal Transmittal Files'},
    { content:'Move to Ready to Process'},
    { content:'Rebuild a Print Batch'},
    { content:'Rebuild a Transmittal Files'},
    { content:'Reset efile batch to Ready to Transmit'},
    { content:'Reset print batch to Ready to Print' },
    { content:'Undelete form' },
    { content:'Generate ACA Submission Repalcement' },
    { content:'Generate ACA Transmission Repalcement' },
    { content:'Generate State Transmittal Files' },
    { content:'Reject' },
    { content:'Move Back to Field Form' },
    { content:'Update Agency File Name' }
  ]

  rows:Array<any> = [];
  
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  selected = [];
  loadingIndicator = true;
  reorderable = true;

  public form = new FormGroup({});

  public companyName:string = "";
  public applicationName:string = "";
  public applicationPath:string = "";
  public pfilePath:string = "";
  public orfilePath:string = "";
  public pfileNo:string = "";
  public printType:string = "";
  public batchSize:string = "";
  public batchFileNo:string = "";
  public efilePath:string = "";
  public lastUpdatedBy:string = "";
  public lastUpdated:string = "";

  public transmitterName:string = "";
  public transmitterName2:string = "";
  public companyName2:string = "";
  public contactPhone:string = "";
  public ext:string = "";
  public contactEmail:string = "";
  public address:string = "";
  public address2:string = "";
  public city:string = "";
  public state:string = "";
  public zip:string = "";
  public tin:string = "";
  public tcc:string = "";
  public tccFor1042s:string = "";
  public tccforACA:string = "";
  public softwareIDfor109495B:string = "";
  public softwareIDfor109495C:string = "";
  public currentYear:string = "";
  public testMode:string = "";
  public combinedFiling:string = "";
  public ssaUserID:string = "";
  public contactPersonName:string = "";
  public contactPersonTitle:string = "";
  public contactPersonTelNo:string = "";
  public lastUpdatedBy2:string = "";
  public lastUpdated2:string = "";

  public :string = "";
  public editShow:boolean = false;
  public saveShow:boolean = true;

  public onSelect({ selected }:any) {
    console.log('Select Event', selected, this.selected);
    this.selected.splice(0, this.selected.length);
  }

  public onActivate(event:any) {

  }

  public onPage(){
    
  }

  public displayCheck(row:any) {
    return row.name !== 'Ethel Price';
  }


  public submitData(): void {
    
  }

  public ngOnInit(): void {
    
  }

  public onShow(): void {

  }

  public changeRoute() {
		
	}

  public sharedshow2level(){
    if(!this.sharedtwolevelshow){
      this.sharedtwolevelshow = true;
    }else{
      this.sharedtwolevelshow = false;
    }
  }

  public printshow2level(){
    if(!this.printtwolevelshow){
      this.printtwolevelshow = true;
    }else{
      this.printtwolevelshow = false;
    }
  }

  public acashow2level(){
    if(!this.acatwolevelshow){
      this.acatwolevelshow = true;
    }else{
      this.acatwolevelshow = false;
    }
  }

  public stateshow2level(){
    if(!this.statetwolevelshow){
      this.statetwolevelshow = true;
    }else{
      this.statetwolevelshow = false;
    }
  }

  public othershow2level(){
    if(!this.othertwolevelshow){
      this.othertwolevelshow = true;
    }else{
      this.othertwolevelshow = false;
    }
  }

  public myshow2level(){
    if(!this.mytwolevelshow){
      this.mytwolevelshow = true;
    }else{
      this.mytwolevelshow = false;
    }
  }

  public addTab(){
    this.rightShowState = true;
    this.setShowState = false;
    this.appsetShowState = false;
    this.transetShowState = false;
    var newTitle = "New Query " + String(this.tabs.length-2) +"*";
    var newQuery = { title: newTitle, content: 'new query', active: false, removable: true,  disabled: false, showState:true, cate:'query'}
    this.tabs.push(newQuery);
  }

  public showVof(){
    this.rightShowState = true;
    this.tabs[0].showState = true;
    this.setShowState = false;
    this.appsetShowState = false;
    this.transetShowState = false;
  }

  public showSb(){
    this.rightShowState = true;
    this.tabs[1].showState = true;
    this.setShowState = false;
    this.appsetShowState = false;
    this.transetShowState = false;
  }

  public showVb(){
    this.rightShowState = true;
    this.tabs[2].showState = true;
    this.setShowState = false;
    this.appsetShowState = false;
    this.transetShowState = false;
  }

  public showRb(){
    this.rightShowState = true;
    this.tabs[3].showState = true;
    this.setShowState = false;
    this.appsetShowState = false;
    this.transetShowState = false;
  }

  public closeAllTabs(){
    this.tabs = [
      { title: 'View ORF Files', content: 'one', active: false, removable: true,  disabled: false, showState:false, cate:'vof'},
      { title: 'Submit Batches', content: 'Second Tab Content', active: false, removable: true,  disabled: false, showState:false, cate:'sb'},
      { title: 'Accept Batches', content: 'Third Tab Content', active: false, removable: true,  disabled: false, showState:false, cate:'vb'},
      { title: 'Reject Batches', content: 'Fourth Tab Content', active: false, removable: true,  disabled: false, showState:false, cate:'rb'}
    ];;
    // this.tabs.forEach(element=>{
    //   element.showState = false;
    // })
  }

  public queryShow(){
    this.rightShowState = true;
    this.setShowState = false;
  }

  public appSetShow(){
    this.rightShowState = false;
    this.setShowState = true;
    this.transetShowState = false;
    this.appsetShowState = true;
  }

  public tranSetShow(){
    this.rightShowState = false;
    this.setShowState = true;
    this.appsetShowState = false;
    this.transetShowState = true;
  }

  public refreshTable(){
    this.resultCountShowState = true;
    var params = [
      {
        "TableName" : "VUserForm",
        "FieldName" : "FormYear",
        "TargetValue" : "2020",
        "Condition" : "1",
        "Operation" : " 1"
      },
      {
          "TableName" : "VUserForm",
          "FieldName" : "FormType",
          "TargetValue" : "1099-MISC",
          "Condition" : "1",
          "Operation" : " 1"
      },
      {
          "TableName" : "VUserForm",
          "FieldName" : "FormType",
          "TargetValue" : "1099-NEC",
          "Condition" : "2",
          "Operation" : " 1"
      }
    ]
    
    this.http.post('query/GetQueryResult', params)  //注意get请求和post请求的传参方式不一样
      .then((res:any) => {
        console.log(res);
        this.rows = res;
        this.resultCount = res.length;
      })
      .catch((err:any) => {
        console.log(err);
      }
    );
  }

  public isPrintCheck(){
    
  }

  public outputTable(){

  }

  public saveQuery(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  public updateQuery(template: TemplateRef<any>){

  }
  public deleteQuery(template: TemplateRef<any>){

  }

  public refreshVOFData(){

  }

  public importSelectORF(){

  }

  public refreshSBData(){

  }

  public refreshABData(){

  }

  public refreshRBData(){

  }

  public sbsubmit(){

  }

  public abAccept(){

  }

  public rbReject(){

  }

  public saveTranSet(){

  }

  public resetTranSet(){
    
  }

  public submitForm(){

  }

  allItems: string[] = [
    'all',
    'not all',
    'any',
    'none'
  ];

  clickItems: Array<any> = [
    {
      level1:'FormStaxRoles',
      level2:[
        'RoleId',
        'RoleName',
        'LoweredRoleName',
        'CreatedDate',
        'LastModified',
        'Description'
      ]
    },
    {
      level1:'FormStaxUsersForms',
      level2:[
        'IsDeleted',
        'UserFormId',
        'UserId',
        'FormId',
        'FormType',
        'FormYear',
        'CreateDate',
        'LastModifiedDate',
        'CouponNumber',
        'SourceCode',
        'SourceCodeID',
        'OriginalFilename',
        'Original',
        'OriginalName',
        'SID',
        'RID',
        'ReceiptID',
        'USID',
        'URID',
        'AgencyFileName',
        'FilerId',
        'RecipientId',
        'PayerName',
        'RecipientName',
        'FilingFee',
        'InvoiceId',
        'FormStatus',
        'PrintStatus',
        'TransmittalStatus',
        'EFileName',
        'EFileDate',
        'EfileEmailSent',
        'EfileEmailDate',
        'RMailedOut',
        'RMailedOutEmailed',
        'RMailDate',
        'ERejectEmailSent',
        'ERejectEmailDate',
        'UserProcess',
        'PFileName',
        'EFileApprovedDate',
        'Operation',
        'PreviousOperation',
        'ServiceId'
      ]
    },
    {
      level1:'FormStaxUsers',
      level2:[
        'UserId',
        'PartnerID',
        'UserName',
        'UserEmailAddress',
        'LastActivityDate',
        'isLockedOut',
        'FailedPasswordAttemptCount',
        'SkipPayment',
        'IsIntuitUser'
      ]
    },
    {
      level1:'FormStaxUsersInRoles',
      level2:[
        'UserId',
        'RoleId'
      ]
    },
    {
      level1:'FormStaxUserFormStateFiling',
      level2:[
        'Id',
        'UserFormId',
        'StateFilingTransmittalStatus',
        'StateFilingState',
        'StateFilingEfileName',
        'StateFilingSubmitDate',
        'StateFilingAcceptDate',
        'StateFilingAgencyFileName'
      ]
    }
  ];
  
  newCondition:string = "[Click here to add a new condition]";

  changeClickAddNewCon(param1:any,param2:any){
    var temp = {
      no:String(Number(this.conditionItems.length) + 1),
      condition1:param1 + " " + param2,
      condition2:'starts with',
      condition3:'[click here]',
      upConditionUpShow:false
    }
    this.conditionItems.push(temp)
  }

  changeCondition1(no:any,param1:any,param2:any){
    this.conditionItems[Number(no)-1].condition1 = param1 + " " + param2;
  }
  
  conditionItems: Array<any> = [
    {
      no:'1',
      condition1:'FormStax_Roles RoleId',
      condition2:'starts with',
      condition3:'[click here]',
      upConditionUpShow:false
    }
  ]

  addNewCon(){
    var temp = {
      no:String(Number(this.conditionItems.length) + 1),
      condition1:'FormStax_Roles RoleId',
      condition2:'starts with',
      condition3:'[click here]',
      upConditionUpShow:false
    }
    this.conditionItems.push(temp)
  }

  openNewBracket(){
    var temp = {
      no:String(Number(this.conditionItems.length) + 1),
      condition1:'FormStax_Roles RoleId',
      condition2:'starts with',
      condition3:'[click here]',
      upConditionUpShow:true
    }
    this.conditionItems.push(temp)
  }

  allState:String = "all";

  changeAllState(param:any){
    this.allState = param;
  }

  con1Items: string[] = [
    '1'
  ]

  con2Items: string[] = [
    'starts with',
    'contains',
    'is equal to',
    'is in list',
    'does not start with',
    'does not contain',
    'is not equal to',
    'is not in list',
    'in sub query',
    'is null',
    'is not null'
  ]

  startsWith:string = "starts with";

  changeStartsWithState(no:any,param:any){
    this.conditionItems[Number(no)-1].condition2 = param;
  }

  public isConditionCheck(){

  }

  clickhere:string="[click here]";
 
}

