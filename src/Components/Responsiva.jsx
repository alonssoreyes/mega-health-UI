import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const Responsiva = ({ data, setEquipmentsByUser, setShowButton }) => {
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    head: {
      textAlign: "center",
      fontWeight: "bold",
    },
    container: {
      marginTop: "50px",
      borderTop: "1px solid",
      borderTopColor: "black",
    },
    textos: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "around",
    },
    firmas: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "around",
      marginTop: "60px",
    },
    assigned:{
        fontSize:14,
        marginBottom:'20px'
    }
  });

  const Doc = () => (
    <Document>
      <Page style={styles.body}>
        <View style={styles.head}>
          <Text>Mega Health Responsiva</Text>
          <Text>Inventario TI</Text>
        </View>
        {data.map((eq) => {
          const fechaCompra = eq.buy_date.split("T")[0];
          const fechaGarantia = eq.guarantee_date.split("T")[0];
          return (
            <View style={styles.container}>
                <Text style={styles.assigned}>Asignados a {eq.assigned_to_name}</Text>
              <View style={styles.textos}>
                <Text>Marca: {eq.brand}</Text>
                <Text>Modelo: {eq.model}</Text>
              </View>
              <View style={styles.textos}>
                <Text>Serie: {eq.serial_number}</Text>
                <Text>F. Compra: {fechaCompra}</Text>
              </View>
              <View style={styles.textos}>
                <Text>Condiciones: {eq.conditions}</Text>
                <Text>F. Garantia: {fechaGarantia}</Text>
              </View>
              <Text>
                --------------------------------------------------------------------------------------------
              </Text>
            </View>
          );
        })}
        <View style={styles.firmas}>
          <Text>Entrega: ________________</Text>
          <Text>Recibe: ________________</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFDownloadLink
      document={<Doc />}
      fileName="Responsiva.pdf"
      className="btn btn-sm btn-secondary"
    >
      {({ blob, url, loading, error }) =>
        loading ? (
          "Loading document..."
        ) : (
          <p
            onClick={() => {
              setShowButton(false);
              setEquipmentsByUser(null);
            }}
          >
            Descargar responsiva
          </p>
        )
      }
    </PDFDownloadLink>
  );
};

export default Responsiva;
