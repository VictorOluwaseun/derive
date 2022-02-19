import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TheLayout from "layouts";
import TopPanel from "components/UI/TopPanel";
import Label from "components/UI/Label";
import Transaction from "components/Custom/Transaction";
import Input from "components/UI/Input";
import IncomeType from "components/Custom/IncomeType";
import Button from "components/UI/Button";

const IncomeScreen: FunctionComponent<IScreen> = ({ navigation }) => {
  const [sum, setSum] = useState("");

  return (
    <>
      <TheLayout>
        <TopPanel withBack navigation={navigation} />
        <View style={styles.body}>
          <Label>Income</Label>
          <View style={styles.headerInput}>
            <Input state={sum} setState={setSum} placeholder="Enter income sum..." keyboardType="decimal-pad" />
          </View>
          <View style={styles.headerType}>
            <Label>Income Type</Label>
            <View style={styles.bodyTypes}>
              <IncomeType />
              <IncomeType />
              <IncomeType />
              <IncomeType />
            </View>
          </View>
          <View style={styles.actionButton}>
            <Button>Income</Button>
          </View>
        </View>
      </TheLayout>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 39,
    paddingBottom: 39,
  },
  headerInput: {
    marginTop: 23,
  },
  headerType: {
    marginTop: 39,
  },
  bodyTypes: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionButton: {
    marginTop: 92,
  },
});

export default IncomeScreen;