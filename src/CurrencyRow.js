import React from 'react';
import './App.css'
import { Select , Input} from 'antd';

const { Option } = Select;

const CurrencyRow = (props) => {
    const { currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount} = props

    return ( 
        <div>
            <Input type="number" className="input" value = {amount} onChange= {onChangeAmount} />   
            <Select
                value = {selectedCurrency}
                onChange={onChangeCurrency}
                showSearch
                style={{width:200}}
                placeholder="Select Currency">
                {currencyOptions.map(data=>(
                    <Option key={data} value={data}>{data}</Option>
                ))}
            </Select>
        </div>
    )
}

export default CurrencyRow;