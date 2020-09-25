import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {
  precautions = "" ;

  checkOptionsOne = [
    { label: '高血壓', value: '0', },
    { label: '心臟病', value: '1' },
    { label: '糖尿病', value: '2' },
    { label: '關節炎', value: '3' },
    { label: '風濕病', value: '4' },
    { label: '中風', value: '5' },
    { label: '胃病', value: '6' },
    { label: '痛風', value: '7' },
    { label: '肺或呼吸道疾病', value: '8' },
    { label: '白内障', value: '9' },
    { label: '脊椎骨詞', value: '10' },
    { label: '骨質疏鬆', value: '11' },
    { label: '高血脂', value: '12' },
    { label: '貧血', value: '13' },
    { label: '肝臟疾病', value: '14' },
    { label: '髖骨骨折', value: '15' },
    { label: '癌症', value: '16' },
    { label: '失智症', value: '17' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
