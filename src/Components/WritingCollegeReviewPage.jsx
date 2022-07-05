import React from "react";
import React, { useState, useMemo } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import countryList from 'react-select-country-list';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const WritingCollegeReviewPage = () => {
    const years = [
        {
          value: 'before2012',
          label: '2012年以前',
        },
        {
          value: '2013',
          label: '2013年',
        },
        {
          value: '2014',
          label: '2014年',
        },
        {
          value: '2015',
          label: '2015年',
        },
        {
          value: '2016',
          label: '2016年',
        },
        {
          value: '2017',
          label: '2017年',
        },
        {
          value: '2018',
          label: '2018年',
        },
        {
          value: '2019',
          label: '2019年',
        },
        {
          value: '2020',
          label: '2020年',
        },
        {
          value: '2021',
          label: '2021年',
        },
      ];
      
      const highschools = [
        {
          value: 'privateInCapitalArea',
          label: '首都圏私立',
        },
        {
          value: 'publicInCapitalArea',
          label: '首都圏公立',
        },
        {
          value: 'privateInRuralArea',
          label: '地方私立',
        },
        {
          value: 'publicInruralArea',
          label: '地方公立',
        },
        {
          value: 'online',
          label: '通信制',
        },
        {
          value: 'international',
          label: 'インターナショナルスクール',
        },
        {
          value: 'abroad',
          label: '海外',
        },
        {
          value: 'other',
          label: 'その他',
        },
      ];
      
      
      
      
       const App = () => {
      
        /* 受験年度 */
        const [year, setYear] = useState('before2012');
        const yearHandleChange = (event) => {
          setYear(event.target.value);
        };
      
        /* 国 */
        const [country, setCountry] = useState('Japan');
        const countries = useMemo(() => countryList().getData(), []);
        const countryHandleChange = (event) => {
          setCountry(event.target.value);
        };
      
        /* 進学大学 */
        const [highschool, setHighschool] = useState('privateInCapitalArea');
        const highschoolHandleChange = (event) => {
          setHighschool(event.target.value);
        };
      
        const [agent, setAgent] = useState('利用した')
        const agentHandlechange = (event) => {
          setAgent(event.target.value);
        }
      
        /* 奨学金 */
        const [scholarship, setScholarship] = useState('利用した')
        const scholarshipHandlechange = (event) => {
          setScholarship(event.target.value);
        }
      
    return (
        <>
            <div>
        <h2>受験年度</h2>
         <TextField
            id="outlined-select-years"
            select
            label="Select"
            value={year}
            onChange={yearHandleChange}
            helperText="受験年度を選んでください"
          >
            {years.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
      </div>
      
      <div>
        <h2>大学名</h2>
          <TextField id="universityName"   helperText="大学名を入力してください" />
      </div>

      <div>
        <h2>大学のある国</h2>
          <TextField
            id="outlined-select-highschool"
            select
            label="Select"
            value={country}
            onChange={countryHandleChange}
            helperText="国を選んでください"
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
      </div>

      
      <div>
        <h2>出身高校</h2>
         <TextField
            id="outlined-select-highschool"
            select
            label="Select"
            value={highschool}
            onChange={highschoolHandleChange}
            helperText="出身高校の分類を選んでください"
          >
            {highschools.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
      </div>

      <div>
        <h2>留学理由・きっかけについて教えてください</h2>
          <TextField id="reason" />
      </div>
        
      <div>
        <h2>他の合格校を教えてください</h2>
          <TextField id="otherUniversity" />
      </div>

      <div>
        <h2>外部テストスコア(SAT・ACT・共通テストなど)</h2>
          <TextField id="testScore" />
        <h2>対策方法</h2>
          <TextField id="TipsOfTestScore" />
      </div>

      <div>
        <h2>語学テストスコア(IELTS・TOEFLなど)</h2>
        <TextField id="englishTestScore" />
        <h2>対策方法</h2>
        <TextField id="TipsOfEnglishTestScore" />
      </div>

      <div>
        <h2>GPA・評定</h2>
            <TextField id="GPA" />
      </div>
      
      <div>
        <h2>エッセイの内容を教えてください</h2>
            <TextField id="essay" />
      </div>

      <div>
        <h2>周囲からの反対はありましたか？あった場合、どのように説得しましたか？</h2>
            <TextField id="oppositeFromParents" />
      </div>

      <div>
        <h2>留学エージェントや留学専門塾は利用しましたか？</h2>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={agent}
              onChange={agentHandlechange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="利用した" />
              <FormControlLabel value="No" control={<Radio />} label="利用しなかった" />
            </RadioGroup>
      </div>

      <div>
        <h2>出願までのスケジュールを教えてください</h2>
          <TextField id="reason" helperText="(例)高3の4月~7月スコアメイク 6月～10月エッセイ執筆 10月推薦書依頼" />
      </div>

    
      <div>
        <h2>給付型の奨学金は受給しましたか？</h2>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={scholarship}
                  onChange={scholarshipHandlechange}
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="利用した" />
                  <FormControlLabel value="No" control={<Radio />} label="利用しなかった" />
                </RadioGroup>
        <h2>【任意】奨学金の金額や給付元(大学からや財団からなど)</h2>
            <TextField id="scholarshipFoundation" />
      </div>
      
      <div>
        <h2>出願準備の中で失敗談や後悔していることがあれば教えてください</h2>
          <TextField id="regret" />
      </div>

      <div>
        <h2>大学選びで重視したことを教えてください</h2>
          <TextField id="tipsOfCollegeDecision" />
      </div>

      <div>
        <h2>【任意】後輩たちが質問やメッセージを送ってもOKなSNSアカウントを教えてください</h2>
          <TextField id="SNSAccount" />
      </div>

      <div>
        <h2>最後に一言お願いします！</h2>
          <TextField id="Message" />
      </div>

      <div>
        <Button variant="contained">投稿する</Button>
      </div>
    
        </>
    );
}