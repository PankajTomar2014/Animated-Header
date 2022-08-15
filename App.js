import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Platform } from 'react-native';
import Animated from 'react-native-reanimated'

const imageArry = [
  {
    uri: 'https://cdn.pixabay.com/photo/2022/07/24/03/01/old-woman-7340874_960_720.jpg',
    id: 1
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2022/07/20/07/16/woman-7333557_960_720.jpg',
    id: 2
  },
  {
    uri: 'https://media.istockphoto.com/photos/surreal-woman-decides-which-page-to-choose-for-the-end-of-her-book-picture-id1082302306',
    id: 3
  },
  {
    uri: 'https://media.istockphoto.com/id/901891580/photo/elderly-woman-looking-at-the-camera-and-smiling.webp?s=612x612&w=is&k=20&c=a_pUfQ3ug4ta15nD8pxZHcI_fHPCjTmRei0rOL-NPQ0=',
    id: 4
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2022/07/24/03/01/old-woman-7340874_960_720.jpg',
    id: 1
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2022/07/20/07/16/woman-7333557_960_720.jpg',
    id: 2
  },
  {
    uri: 'https://media.istockphoto.com/photos/surreal-woman-decides-which-page-to-choose-for-the-end-of-her-book-picture-id1082302306',
    id: 3
  },
  {
    uri: 'https://media.istockphoto.com/id/901891580/photo/elderly-woman-looking-at-the-camera-and-smiling.webp?s=612x612&w=is&k=20&c=a_pUfQ3ug4ta15nD8pxZHcI_fHPCjTmRei0rOL-NPQ0=',
    id: 4
  },
];

const HEADER_HEIGHT = 70;

export const App = () => {

  const scrollY = new Animated.Value(0);

  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);

  const headerY = Animated.interpolateNode(diffClampScrollY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT]
  })

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          zIndex: 100,
          position: "absolute",
          height: HEADER_HEIGHT,
          transform: [{ translateY: headerY }],
          // width:"100%",
          top: 0,
          left: 0,
          right: 0,
          elevation: 100,
          backgroundColor: 'gray'
        }} />
      <Animated.ScrollView
        style={{paddingTop:HEADER_HEIGHT}}
        bounces={false} // it will use for jump the last item of list on end reach.
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollY } }
          }
        ])}
      >


        {imageArry.map((item, index) => (
          <View key={index}
            style={{
              height: 400,
              width: '80%',
              alignSelf: "center",
              backgroundColor: "gray",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
              // marginTop: index == 0 ? 80 : 0
            }}>
            <Image
              source={{ uri: item.uri }}
              style={{
                height: '100%',
                borderRadius: 20,
                width: '100%',
                flex: 1
              }}
              resizeMode={'contain'}

            />
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}
export default App;