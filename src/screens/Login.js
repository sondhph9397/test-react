import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { login } from "../api/auth";
const Home = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState();
    const handleLogin = (data) => {
        setErrors({});
        login({ email, password }).then((response) => {
            navigation.navigate('Home')
            console.log(response.data);
        }).catch(({ response }) => {
            console.log(response.data);
            if (response.data.errors) {
                setErrors(response.data.errors);
                return
            }
            Alert.alert('Đăng nhập không thành công!', 'Thông tin tài khoản hoặc mật khẩu không chính xác.')
        })
    }
    // const Abc = () => {
    //     const a = [1, 2, 3, 4].map(() => (<TextInput
    //         style={{
    //             width: 120,
    //             height: 40,
    //             padding: 10,
    //             backgroundColor: '#eeeeee'
    //         }}
    //         value={email}
    //         placeholder='Email'
    //         onChangeText={(e) => setEmail(e)}
    //     />))
    //     console.log(a);
    //     return a;
    // }
    return (
        <View style={{
            backgroundColor: "#FFF",
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* <Abc /> */}
            <TextInput
            style={{
                width: 120,
                height: 40,
                padding: 10,
                backgroundColor: '#eeeeee'
            }}
            value={email}
            placeholder='Email'
            onChangeText={(e) => setEmail(e)}
        />
            <Text>{errors?.email?.[0]}</Text>
            <TextInput
                style={{
                    width: 120,
                    height: 40,
                    padding: 10,
                    backgroundColor: '#eeeeee'
                }}
                value={password}
                placeholder='Password'
                onChangeText={(e) => setPassword(e)}
            />
            <Text>{errors?.password?.[0]}</Text>
            <TouchableOpacity style={{ backgroundColor: 'green', padding: 8 }} onPress={handleLogin}><Text>Login</Text></TouchableOpacity>
        </View>
    )
}
export default Home;