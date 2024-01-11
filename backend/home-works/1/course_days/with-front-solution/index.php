<!DOCTYPE html>
<html>

<head>
    <title>Course days</title>
    <link rel="stylesheet" href="style/style.css">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>

<body>

    <?php
    $daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    ?>


    <div class="container">
        <h1>Select a day!</h1>

        <div class="container-inner">
            <form>
                <select>
                    <option disabled=true selected value></option>
                    <?php
                    foreach ($daysOfWeek as $day) {
                        echo "<option value='$day'>$day</option>";
                    }
                    ?>
                </select>
            </form>
            <div class="answer">
            </div>
        </div>

    </div>

    <script src="./script/main.js"></script>
</body>

</html>