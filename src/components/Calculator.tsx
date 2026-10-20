import { useState } from "react";

function Calculator() {
    const [Szam1, setSzam1] = useState<number>();
    const [Szam2, setSzam2] = useState<number>();
    const [Muvelet, setMuvelet] = useState<string>("");
    const [Eredmeny, setEredmeny] = useState<number>();
    const [Hiba, setHiba] = useState<string>("");

    function szamol() {
        const a = Szam1;
        const b = Szam2;

        setHiba("");
        setEredmeny(0);

        if (Szam1 === undefined || Szam2 === undefined) {
            setHiba("Kérem adjon meg két számot!");
            return;
        }
        if (Muvelet === "") {
            setHiba("Kérem adjon meg egy műveletet!");
            return;
        }
        if (Muvelet === "Osztás" && Szam2 === 0) {
            setHiba("Nullával nem lehet osztani!");
            return;
        }

        let eredmeny: number = 0;

        if (Muvelet === "Összeadás") {
            eredmeny = a! + b!;
        } else if (Muvelet === "Kivonás") {
            eredmeny = a! - b!;
        } else if (Muvelet === "Szorzás") {
            eredmeny = a! * b!;
        } else if (Muvelet === "Osztás") {
            eredmeny = a! / b!;
        }

        setEredmeny(eredmeny);
    }
    return (
        <div>
            <input type="number" value={Szam1} placeholder="első szám" onChange={(e) => setSzam1(Number(e.target.value))} />
            <select value={Muvelet} onChange={(e) => setMuvelet(e.target.value)}>
                <option value="">Válasszon műveletet</option>
                <option value="Összeadás">Összeadás</option>
                <option value="Kivonás">Kivonás</option>
                <option value="Szorzás">Szorzás</option>
                <option value="Osztás">Osztás</option>
            </select>
            <input type="number" value={Szam2} placeholder="második szám" onChange={(e) => setSzam2(Number(e.target.value))} />
            <button onClick={szamol}>Számol</button>
            {Hiba && <p>{Hiba}</p>}
            {Eredmeny !== undefined && !Hiba && <p>{Eredmeny}</p>}
        </div>
    )
}

export default Calculator;
